package sg.edu.iss.demo.calendar;

import lombok.Getter;

@Getter
public class CalendarEventView {

	private final String id;
	private final String title;
	private final String date;
	private final boolean allDay;
	private final String startTime;
	private final String endTime;
	private final String details;
	private final String color;
	private final String createdAt;
	private final String updatedAt;

	public CalendarEventView(PersonalCalendarEvent event) {

		this.id = event.getId().toString();
		this.title = event.getTitle();
		this.date = event.getEventDate().toString();
		this.allDay = event.isAllDay();
		this.startTime = event.getStartTime() == null ? null : event.getStartTime().toString();
		this.endTime = event.getEndTime() == null ? null : event.getEndTime().toString();
		this.details = event.getDetails();
		this.color = event.getColor();
		this.createdAt = event.getCreatedAt().toString();
		this.updatedAt = event.getUpdatedAt().toString();
	}
}
