package sg.edu.iss.demo.calendar;

import jakarta.servlet.http.HttpServletRequest;
import java.util.List;
import org.springframework.http.CacheControl;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import sg.edu.iss.demo.model.User;

@RestController
@RequestMapping("/api/calendar")
public class CalendarEventController {
    private final PersonalCalendarService calendar;

    public CalendarEventController(PersonalCalendarService calendar) { this.calendar = calendar; }

    @GetMapping("/session")
    public ResponseEntity<SessionView> session(HttpServletRequest request) {
        User user = calendar.currentUser(request);
        CsrfToken token = (CsrfToken) request.getAttribute(CsrfToken.class.getName());
        if (token == null) throw new IllegalStateException("CSRF filter did not provide a token");
        return noCache(new SessionView(1, user.getId().toString(), user.getRole().name(),
            new CsrfView(token.getHeaderName(), token.getParameterName(), token.getToken())));
    }

    @GetMapping("/events")
    public ResponseEntity<MonthView> list(@RequestParam int year, @RequestParam int month,
                                         HttpServletRequest request) {
        User user = calendar.currentUser(request);
        List<EventView> events = calendar.list(user.getId(), year, month).stream().map(EventView::from).toList();
        return noCache(new MonthView(1, user.getId().toString(), year, month, events));
    }

    @PostMapping("/events")
    public ResponseEntity<EventView> create(@RequestBody CalendarEventInput input, HttpServletRequest request) {
        User user = calendar.currentUser(request);
        return ResponseEntity.status(201).cacheControl(CacheControl.noStore())
            .body(EventView.from(calendar.create(user.getId(), input)));
    }

    @PutMapping("/events/{id}")
    public ResponseEntity<EventView> update(@PathVariable Long id, @RequestBody CalendarEventInput input,
                                           HttpServletRequest request) {
        User user = calendar.currentUser(request);
        return noCache(EventView.from(calendar.update(user.getId(), id, input)));
    }

    @DeleteMapping("/events/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id, HttpServletRequest request) {
        User user = calendar.currentUser(request);
        calendar.delete(user.getId(), id);
        return ResponseEntity.noContent().cacheControl(CacheControl.noStore()).build();
    }

    private static <T> ResponseEntity<T> noCache(T body) {
        return ResponseEntity.ok().cacheControl(CacheControl.noStore()).body(body);
    }

    public record CsrfView(String headerName, String parameterName, String token) { }
    public record SessionView(int schemaVersion, String ownerId, String role, CsrfView csrf) { }
    public record MonthView(int schemaVersion, String ownerId, int year, int month, List<EventView> events) { }
    public record EventView(String id, String title, String date, boolean allDay, String startTime,
                            String endTime, String details, String color, String createdAt, String updatedAt) {
        static EventView from(PersonalCalendarEvent event) {
            return new EventView(event.getId().toString(), event.getTitle(), event.getEventDate().toString(),
                event.isAllDay(), event.getStartTime() == null ? null : event.getStartTime().toString(),
                event.getEndTime() == null ? null : event.getEndTime().toString(), event.getDetails(),
                event.getColor(), event.getCreatedAt().toString(), event.getUpdatedAt().toString());
        }
    }
}
