package sg.edu.iss.demo.model;

import java.time.LocalDateTime;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NotificationLog {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "The recipient's email cannot be left blank.")
	@Email(message = "The format of the recipient's email address is incorrect.")
	@Size(max = 100)
	@Column(name = "recipient_email", nullable = false, length = 100)
	private String recipientEmail;

	@NotBlank(message = "Email subject cannot be empty")
	@Size(max = 200)
	@Column(nullable = false, length = 200)
	private String subject;

	@Enumerated(EnumType.STRING)
	private NotificationStatus status;

	private LocalDateTime sentAt;

	@Size(max = 500)
	@Column(name = "error_message", length = 500)
	private String errorMessage;
	
	public void markSent() {
		
		this.status = NotificationStatus.SENT;
		
		this.sentAt = LocalDateTime.now();
		
		this.errorMessage = null;
		
	}
}
