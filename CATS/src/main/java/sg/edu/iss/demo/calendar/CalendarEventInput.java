package sg.edu.iss.demo.calendar;

import lombok.Data;

@Data
public class CalendarEventInput {

	private String title;

	private String date;

	private Boolean allDay;

	private String startTime;

	private String endTime;

	private String details;

	private String color;
}
