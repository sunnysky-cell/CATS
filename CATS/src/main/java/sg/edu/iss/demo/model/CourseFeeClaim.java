package sg.edu.iss.demo.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseFeeClaim {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "course_application_id", nullable = false)
	private CourseApplication application;

	@ManyToOne
	@JoinColumn(name = "claimant_id", nullable = false)
	private User claimant;

	private BigDecimal claimAmount;

	private String receiptFilePath;

	@Enumerated(EnumType.STRING)
	private ClaimStatus status;

	private LocalDateTime submittedAt;

	private LocalDateTime decisionDate;

	private String managerComment;
}
