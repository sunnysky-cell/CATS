package sg.edu.iss.demo.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "course_application")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseApplication {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "applicant_id", nullable = false)
	private User applicant;

	private String courseTitle;

	@ManyToOne
	@JoinColumn(name = "category_id")
	private CourseCategory category;

	private LocalDate startDate;

	private LocalDate endDate;

	private BigDecimal courseFee;

	private BigDecimal trainingDays;

	private String justification;

	@Enumerated(EnumType.STRING)
	private ApplicationStatus status;

	private String managerComment;

	private LocalTime decisionDate;

	private String experienceComment;

	private LocalDateTime createdAt;

	private LocalDateTime updatedAt;
}
