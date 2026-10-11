package sg.edu.iss.demo.calendar;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.CacheControl;
import org.springframework.http.HttpStatus;
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

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import sg.edu.iss.demo.model.User;

@RestController
@RequestMapping("/api/calendar")
public class CalendarEventController {

	private final PersonalCalendarService calendarService;

	public CalendarEventController(PersonalCalendarService calendarService) {

		this.calendarService = calendarService;
	}

	@GetMapping("/session")
	public ResponseEntity<Map<String, Object>> getSession(HttpSession session, HttpServletRequest request) {

		User user = calendarService.currentUser(session);

		CsrfToken token = (CsrfToken) request.getAttribute(CsrfToken.class.getName());

		if (token == null) {
			throw new IllegalStateException("CSRF filter did not provide a token");
		}

		Map<String, Object> csrf = new LinkedHashMap<>();
		csrf.put("headerName", token.getHeaderName());
		csrf.put("parameterName", token.getParameterName());
		csrf.put("token", token.getToken());

		Map<String, Object> body = new LinkedHashMap<>();
		body.put("schemaVersion", 1);
		body.put("ownerId", user.getId().toString());
		body.put("role", user.getRole().name());
		body.put("csrf", csrf);

		return noCache(body);
	}

	@GetMapping("/events")
	public ResponseEntity<Map<String, Object>> listEvents(@RequestParam int year, @RequestParam int month,
			HttpSession session) {

		User user = calendarService.currentUser(session);

		List<CalendarEventView> events = new ArrayList<>();

		for (PersonalCalendarEvent event : calendarService.findByMonth(user.getId(), year, month)) {
			events.add(new CalendarEventView(event));
		}

		Map<String, Object> body = new LinkedHashMap<>();
		body.put("schemaVersion", 1);
		body.put("ownerId", user.getId().toString());
		body.put("year", year);
		body.put("month", month);
		body.put("events", events);

		return noCache(body);
	}

	@PostMapping("/events")
	public ResponseEntity<CalendarEventView> createEvent(@RequestBody CalendarEventInput input, HttpSession session) {

		User user = calendarService.currentUser(session);

		PersonalCalendarEvent event = calendarService.create(user.getId(), input);

		return ResponseEntity.status(HttpStatus.CREATED).cacheControl(CacheControl.noStore())
				.body(new CalendarEventView(event));
	}

	@PutMapping("/events/{id}")
	public ResponseEntity<CalendarEventView> updateEvent(@PathVariable Long id, @RequestBody CalendarEventInput input,
			HttpSession session) {

		User user = calendarService.currentUser(session);

		PersonalCalendarEvent event = calendarService.update(user.getId(), id, input);

		return noCache(new CalendarEventView(event));
	}

	@DeleteMapping("/events/{id}")
	public ResponseEntity<Void> deleteEvent(@PathVariable Long id, HttpSession session) {

		User user = calendarService.currentUser(session);

		calendarService.delete(user.getId(), id);

		return ResponseEntity.noContent().cacheControl(CacheControl.noStore()).build();
	}

	private <T> ResponseEntity<T> noCache(T body) {

		return ResponseEntity.ok().cacheControl(CacheControl.noStore()).body(body);
	}
}
