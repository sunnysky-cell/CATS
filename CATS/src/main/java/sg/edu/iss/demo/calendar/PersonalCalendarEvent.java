package sg.edu.iss.demo.calendar;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

/** Private calendar data. The owner is a scalar ID, never a serialized User entity. */
@Entity
@Table(name = "personal_calendar_event", indexes = {
    @Index(name = "idx_personal_calendar_owner_date", columnList = "owner_id,event_date")
})
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

    protected PersonalCalendarEvent() { }

    PersonalCalendarEvent(Long ownerId, CalendarEventInput.Validated input) {
        this.ownerId = ownerId;
        this.createdAt = LocalDateTime.now();
        update(input);
    }

    void update(CalendarEventInput.Validated input) {
        title = input.title();
        eventDate = input.date();
        allDay = input.allDay();
        startTime = input.startTime();
        endTime = input.endTime();
        details = input.details();
        color = input.color();
        updatedAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public LocalDate getEventDate() { return eventDate; }
    public boolean isAllDay() { return allDay; }
    public LocalTime getStartTime() { return startTime; }
    public LocalTime getEndTime() { return endTime; }
    public String getDetails() { return details; }
    public String getColor() { return color; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }
}
