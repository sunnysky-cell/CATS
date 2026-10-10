package sg.edu.iss.demo.calendar;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import java.time.DateTimeException;
import java.time.YearMonth;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.repo.UserRepository;

@Service
@Transactional
public class PersonalCalendarService {
    private final PersonalCalendarEventRepository events;
    private final UserRepository users;

    public PersonalCalendarService(PersonalCalendarEventRepository events, UserRepository users) {
        this.events = events;
        this.users = users;
    }

    @Transactional(readOnly = true)
    public User currentUser(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Object attribute = session == null ? null : session.getAttribute("loggedInUser");
        if (!(attribute instanceof User user) || user.getId() == null || user.getRole() == null)
            throw CalendarApiException.signInRequired();
        // A disabled/deleted account cannot continue writing using an old session object.
        return users.findById(user.getId()).filter(current -> current.isEnabled() && current.getRole() != null)
            .orElseThrow(CalendarApiException::signInRequired);
    }

    @Transactional(readOnly = true)
    public List<PersonalCalendarEvent> list(Long ownerId, int year, int month) {
        YearMonth range;
        try {
            if (year < 1900 || year > 2200) throw new DateTimeException("Year outside range");
            range = YearMonth.of(year, month);
        } catch (DateTimeException exception) {
            throw CalendarApiException.badRequest("Choose a year from 1900 to 2200 and a month from 1 to 12.");
        }
        return events.findByOwnerIdAndEventDateBetweenOrderByEventDateAscStartTimeAscIdAsc(
            ownerId, range.atDay(1), range.atEndOfMonth());
    }

    public PersonalCalendarEvent create(Long ownerId, CalendarEventInput input) {
        return events.save(new PersonalCalendarEvent(ownerId, input.validated()));
    }

    public PersonalCalendarEvent update(Long ownerId, Long id, CalendarEventInput input) {
        PersonalCalendarEvent event = ownedEvent(ownerId, id);
        event.update(input.validated());
        return events.save(event);
    }

    public void delete(Long ownerId, Long id) {
        events.delete(ownedEvent(ownerId, id));
    }

    private PersonalCalendarEvent ownedEvent(Long ownerId, Long id) {
        if (id == null || id <= 0) throw CalendarApiException.notFound();
        // Guessing another account's ID has the same response as a missing ID.
        return events.findByIdAndOwnerId(id, ownerId).orElseThrow(CalendarApiException::notFound);
    }
}
