package sg.edu.iss.demo.calendar;

final class CalendarApiException extends RuntimeException {
    private final int status;
    private final String code;

    CalendarApiException(int status, String code, String message) {
        super(message);
        this.status = status;
        this.code = code;
    }

    static CalendarApiException badRequest(String message) {
        return new CalendarApiException(400, "VALIDATION", message);
    }

    static CalendarApiException signInRequired() {
        return new CalendarApiException(401, "AUTH", "Your session has expired. Sign in again.");
    }

    static CalendarApiException notFound() {
        return new CalendarApiException(404, "NOT_FOUND", "The event does not exist.");
    }

    int status() { return status; }
    String code() { return code; }
}
