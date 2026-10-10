package sg.edu.iss.demo.calendar;

import java.time.DateTimeException;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Set;

/** The write contract contains no owner or audit fields; those always come from the server. */
public record CalendarEventInput(
    String title, String date, Boolean allDay, String startTime,
    String endTime, String details, String color
) {
    private static final Set<String> COLORS = Set.of("blue", "teal", "indigo");

    Validated validated() {
        String cleanTitle = title == null ? "" : title.trim();
        if (cleanTitle.isEmpty() || cleanTitle.length() > 120)
            throw CalendarApiException.badRequest("Title must contain 1 to 120 characters.");
        String cleanDetails = details == null ? "" : details.trim();
        if (cleanDetails.length() > 2000)
            throw CalendarApiException.badRequest("Details must contain at most 2000 characters.");
        if (allDay == null)
            throw CalendarApiException.badRequest("Choose whether the event lasts all day.");
        if (!COLORS.contains(color == null ? "" : color))
            throw CalendarApiException.badRequest("Color must be blue, teal or indigo.");
        LocalDate day;
        try {
            if (date == null || !date.matches("\\d{4}-\\d{2}-\\d{2}"))
                throw new DateTimeException("Invalid date");
            day = LocalDate.parse(date);
            if (day.getYear() < 1900 || day.getYear() > 2200)
                throw new DateTimeException("Date outside supported range");
        } catch (DateTimeException exception) {
            throw CalendarApiException.badRequest("Date must be a valid YYYY-MM-DD from 1900 to 2200.");
        }
        LocalTime start = parseTime(startTime);
        LocalTime end = parseTime(endTime);
        if (allDay && (start != null || end != null))
            throw CalendarApiException.badRequest("All-day events must not include start or end times.");
        if (!allDay && start == null)
            throw CalendarApiException.badRequest("A timed event needs a start time.");
        if (end != null && end.isBefore(start))
            throw CalendarApiException.badRequest("End time must be the same as or later than start time.");
        return new Validated(cleanTitle, day, allDay, start, end, cleanDetails, color);
    }

    private static LocalTime parseTime(String value) {
        if (value == null || value.isEmpty()) return null;
        try {
            if (!value.matches("\\d{2}:\\d{2}")) throw new DateTimeException("Invalid time");
            return LocalTime.parse(value);
        } catch (DateTimeException exception) {
            throw CalendarApiException.badRequest("Times must use valid 24-hour HH:mm values.");
        }
    }

    record Validated(String title, LocalDate date, boolean allDay, LocalTime startTime,
                     LocalTime endTime, String details, String color) { }
}
