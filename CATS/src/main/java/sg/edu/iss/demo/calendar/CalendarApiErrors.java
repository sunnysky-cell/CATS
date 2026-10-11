package sg.edu.iss.demo.calendar;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.CacheControl;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@Order(Ordered.HIGHEST_PRECEDENCE)
@RestControllerAdvice(basePackageClasses = CalendarEventController.class)
public class CalendarApiErrors {

	@ExceptionHandler(CalendarApiException.class)
	public ResponseEntity<Map<String, String>> handleCalendarError(CalendarApiException error) {

		return errorResponse(error.getStatus(), error.getCode(), error.getMessage());
	}

	@ExceptionHandler({ HttpMessageNotReadableException.class, MissingServletRequestParameterException.class,
			MethodArgumentTypeMismatchException.class })
	public ResponseEntity<Map<String, String>> handleInvalidRequest(Exception error) {

		return errorResponse(400, "VALIDATION", "The request has missing or invalid fields.");
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<Map<String, String>> handleOtherError(Exception error) {

		return errorResponse(500, "INTERNAL", "The event could not be saved or loaded. Try again.");
	}

	private ResponseEntity<Map<String, String>> errorResponse(int status, String code, String message) {

		Map<String, String> body = new LinkedHashMap<>();
		body.put("code", code);
		body.put("message", message);

		return ResponseEntity.status(status).cacheControl(CacheControl.noStore()).body(body);
	}
}
