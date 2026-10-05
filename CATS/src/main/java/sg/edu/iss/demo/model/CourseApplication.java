package sg.edu.iss.demo.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
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

	@NotBlank(message = "The course name cannot be left blank.")
	@Size(max = 150, message = "Course name is too long (max 150 characters)")  
	@Column(nullable = false, length = 150)
	private String courseTitle;

	@ManyToOne
	@JoinColumn(name = "category_id", nullable = false)
	@NotNull(message = "Please select the course category")
	private CourseCategory category;
	
	@NotBlank(message = "TrainingProvider cannot be empty")
	@Column(nullable = false, length = 150)
	private String trainingProvider; 

	@NotNull(message = "The start date cannot be left blank.")
	@Column(nullable = false)
	private LocalDate startDate;

	@NotNull(message = "The end date cannot be left blank.")
	@Column(nullable = false)
	private LocalDate endDate;

	@DecimalMin(value = "0.0" )
	@Digits(integer = 8, fraction = 2)
	private BigDecimal courseFee;

	@DecimalMin(value = "0.0" )
	@Digits(integer = 3, fraction = 1)
	private BigDecimal trainingDays;

	@NotBlank(message = "The reason for the application cannot be left blank.")
	@Size(max = 2000)
	private String justification;
	
	private String workDissemination;  

	@Enumerated(EnumType.STRING)
	private ApplicationStatus status;

	private String managerComment;

	private LocalDateTime  decisionDate;

	private String experienceComment;

	private LocalDateTime createdAt;

	private LocalDateTime updatedAt;
}
