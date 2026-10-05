package sg.edu.iss.demo.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PublicHoliday {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull(message = "The holiday date cannot be left blank.")
	@Column(name = "holiday_date", nullable = false, unique = true)
	private LocalDateTime holidayDate;

	@NotBlank(message = "The name of the vacation cannot be left blank.")
	@Size(max = 150)
	@Column(nullable = false, length = 150)
	private String description;
	
	public PublicHoliday(LocalDateTime holidayDate, String description) {
		
		this.holidayDate = holidayDate;
		
		this.description = description;
		
	}
}
