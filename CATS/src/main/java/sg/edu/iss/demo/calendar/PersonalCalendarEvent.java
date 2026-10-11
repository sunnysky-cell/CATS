package sg.edu.iss.demo.calendar;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "personal_calendar_event", indexes = {
		@Index(name = "idx_personal_calendar_owner_date", columnList = "owner_id,event_date") })
public class PersonalCalendarEvent {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "owner_id", nullable = false)
	private Long ownerId;

	@Column(nullable = false, length = 120)
	private String title;

	@Column(name = "event_date", nullable = false)
	private LocalDate eventDate;

	@Column(name = "all_day", nullable = false)
	private boolean allDay;

	@Column(name = "start_time")
	private LocalTime startTime;

	@Column(name = "end_time")
	private LocalTime endTime;

	@Column(nullable = false, length = 2000)
	private String details;

	@Column(nullable = false, length = 10)
	private String color;

	@Column(name = "created_at", nullable = false)
	private LocalDateTime createdAt;

	@Column(name = "updated_at", nullable = false)
	private LocalDateTime updatedAt;
}
