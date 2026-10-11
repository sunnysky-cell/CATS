package sg.edu.iss.demo.calendar;

public class CalendarApiException extends RuntimeException {

	private final int status;

	private final String code;

	public CalendarApiException(int status, String code, String message) {

		super(message);
		this.status = status;
		this.code = code;
	}

	public static CalendarApiException badRequest(String message) {

		return new CalendarApiException(400, "VALIDATION", message);
	}

	public static CalendarApiException signInRequired() {

		return new CalendarApiException(401, "AUTH", "Your session has expired. Sign in again.");
	}

	public static CalendarApiException notFound() {

		return new CalendarApiException(404, "NOT_FOUND", "The event does not exist.");
	}

	public int getStatus() {
		return status;
	}

	public String getCode() {
		return code;
	}
}
