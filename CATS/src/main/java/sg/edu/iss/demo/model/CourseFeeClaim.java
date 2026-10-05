package sg.edu.iss.demo.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseFeeClaim {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	@NotNull(message = "Please select the course application for reimbursement.")
	@JoinColumn(name = "course_application_id", nullable = false, unique = true)
	@ToString.Exclude
	@EqualsAndHashCode.Exclude
	private CourseApplication application;

	@ManyToOne
	@JoinColumn(name = "claimant_id", nullable = false)
	@ToString.Exclude
	@EqualsAndHashCode.Exclude
	private User claimant;

	@NotNull(message = "The reimbursement amount cannot be left blank.")
	@DecimalMin(value = "0.01")
	@Digits(integer = 8, fraction = 2)
	@Column(nullable = false, precision = 10, scale = 2)
	private BigDecimal claimAmount;

	@Size(max = 500)
	@Column(length = 500)
	private String receiptFilePath;
	
	@Size(max = 500)
	@Column(length = 500)
	private String certificateFilePath;

	@Enumerated(EnumType.STRING)
	private ClaimStatus status;

	@Column(updatable = false)
	private LocalDateTime submittedAt;

	
	private LocalDateTime decisionDate;

	private String managerComment;
}
