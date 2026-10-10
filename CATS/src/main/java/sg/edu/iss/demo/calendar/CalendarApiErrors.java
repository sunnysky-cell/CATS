package sg.edu.iss.demo.calendar;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.CacheControl;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

/** Keep this API's errors JSON without changing the original site's HTML exception pages. */
@Order(Ordered.HIGHEST_PRECEDENCE)
@RestControllerAdvice(basePackageClasses = CalendarEventController.class)
public class CalendarApiErrors {
    @ExceptionHandler(CalendarApiException.class)
    public ResponseEntity<ErrorView> calendarError(CalendarApiException exception) {
        return response(exception.status(), exception.code(), exception.getMessage());
    }

    @ExceptionHandler({HttpMessageNotReadableException.class, MissingServletRequestParameterException.class,
        MethodArgumentTypeMismatchException.class})
    public ResponseEntity<ErrorView> invalidRequest(Exception exception) {
        return response(400, "VALIDATION", "The request has missing or invalid fields.");
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorView> unexpectedError(Exception exception) {
        return response(500, "INTERNAL", "The event could not be saved or loaded. Try again.");
    }

    private static ResponseEntity<ErrorView> response(int status, String code, String message) {
        return ResponseEntity.status(status).cacheControl(CacheControl.noStore()).body(new ErrorView(code, message));
    }

    public record ErrorView(String code, String message) { }
}
