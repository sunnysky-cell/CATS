package sg.edu.iss.demo.calendar;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeParseException;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.servlet.http.HttpSession;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.repo.UserRepository;

@Service
@Transactional
public class PersonalCalendarService {

	private static final List<String> COLORS = List.of("blue", "teal", "indigo");

	private final PersonalCalendarEventRepository eventRepo;

	private final UserRepository userRepo;

	public PersonalCalendarService(PersonalCalendarEventRepository eventRepo, UserRepository userRepo) {

		this.eventRepo = eventRepo;
		this.userRepo = userRepo;
	}

	@Transactional(readOnly = true)
	public User currentUser(HttpSession session) {

		Object attr = session.getAttribute("loggedInUser");

		if (!(attr instanceof User user) || user.getId() == null || user.getRole() == null) {
			throw CalendarApiException.signInRequired();
		}

		User current = userRepo.findById(user.getId()).orElse(null);

		if (current == null || !current.isEnabled() || current.getRole() == null) {
			throw CalendarApiException.signInRequired();
		}

		return current;
	}

	@Transactional(readOnly = true)
	public List<PersonalCalendarEvent> findByMonth(Long ownerId, int year, int month) {

		if (year < 1900 || year > 2200 || month < 1 || month > 12) {
			throw CalendarApiException.badRequest("Choose a year from 1900 to 2200 and a month from 1 to 12.");
		}

		LocalDate firstDay = LocalDate.of(year, month, 1);

		LocalDate lastDay = firstDay.withDayOfMonth(firstDay.lengthOfMonth());

		return eventRepo.findByOwnerIdAndMonth(ownerId, firstDay, lastDay);
	}

	public PersonalCalendarEvent create(Long ownerId, CalendarEventInput input) {

		PersonalCalendarEvent event = new PersonalCalendarEvent();

		event.setOwnerId(ownerId);
		event.setCreatedAt(LocalDateTime.now());

		copyInput(event, input);

		return eventRepo.save(event);
	}

	public PersonalCalendarEvent update(Long ownerId, Long id, CalendarEventInput input) {

		PersonalCalendarEvent event = findOwnEvent(ownerId, id);

		copyInput(event, input);

		return eventRepo.save(event);
	}

	public void delete(Long ownerId, Long id) {

		eventRepo.delete(findOwnEvent(ownerId, id));
	}

	private PersonalCalendarEvent findOwnEvent(Long ownerId, Long id) {

		if (id == null || id <= 0) {
			throw CalendarApiException.notFound();
		}

		return eventRepo.findByIdAndOwnerId(id, ownerId).orElseThrow(CalendarApiException::notFound);
	}

	private void copyInput(PersonalCalendarEvent event, CalendarEventInput input) {

		String title = input.getTitle() == null ? "" : input.getTitle().trim();

		if (title.isEmpty() || title.length() > 120) {
			throw CalendarApiException.badRequest("Title must contain 1 to 120 characters.");
		}

		String details = input.getDetails() == null ? "" : input.getDetails().trim();

		if (details.length() > 2000) {
			throw CalendarApiException.badRequest("Details must contain at most 2000 characters.");
		}

		Boolean allDay = input.getAllDay();

		if (allDay == null) {
			throw CalendarApiException.badRequest("Choose whether the event lasts all day.");
		}

		String color = input.getColor();

		if (color == null || !COLORS.contains(color)) {
			throw CalendarApiException.badRequest("Color must be blue, teal or indigo.");
		}

		LocalDate date = parseDate(input.getDate());

		LocalTime startTime = parseTime(input.getStartTime());

		LocalTime endTime = parseTime(input.getEndTime());

		if (allDay && (startTime != null || endTime != null)) {
			throw CalendarApiException.badRequest("All-day events must not include start or end times.");
		}

		if (!allDay && startTime == null) {
			throw CalendarApiException.badRequest("A timed event needs a start time.");
		}

		if (endTime != null && endTime.isBefore(startTime)) {
			throw CalendarApiException.badRequest("End time must be the same as or later than start time.");
		}

		event.setTitle(title);
		event.setEventDate(date);
		event.setAllDay(allDay);
		event.setStartTime(startTime);
		event.setEndTime(endTime);
		event.setDetails(details);
		event.setColor(color);
		event.setUpdatedAt(LocalDateTime.now());
	}

	private LocalDate parseDate(String value) {

		String message = "Date must be a valid YYYY-MM-DD from 1900 to 2200.";

		if (value == null || !value.matches("\\d{4}-\\d{2}-\\d{2}")) {
			throw CalendarApiException.badRequest(message);
		}

		LocalDate date;

		try {
			date = LocalDate.parse(value);
		} catch (DateTimeParseException e) {
			throw CalendarApiException.badRequest(message);
		}

		if (date.getYear() < 1900 || date.getYear() > 2200) {
			throw CalendarApiException.badRequest(message);
		}

		return date;
	}

	private LocalTime parseTime(String value) {

		if (value == null || value.isEmpty()) {
			return null;
		}

		String message = "Times must use valid 24-hour HH:mm values.";

		if (!value.matches("\\d{2}:\\d{2}")) {
			throw CalendarApiException.badRequest(message);
		}

		try {
			return LocalTime.parse(value);
		} catch (DateTimeParseException e) {
			throw CalendarApiException.badRequest(message);
		}
	}
}
