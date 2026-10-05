package sg.edu.iss.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class CourseCategory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "The category name cannot be left blank.")
	@Size(max = 100)
	@Column(nullable = false, unique = true, length = 100)
	private String name;

	@Size(max = 500)
	@Column(length = 500)
	private String description;

	@Column(nullable = false)
	private boolean feeRequired;

	@Column(nullable = false)
	private boolean allowHalfDay;

	@Column(nullable = false)
	private boolean active = true;
	
	public static CourseCategory internalTraining() {
		
		CourseCategory c = new CourseCategory();
		
		c.name = "Internal Training";
		
		c.description = "The internal training organized by the company is free of charge and can be counted as half a day.";
				
		c.feeRequired = false;
		
		c.allowHalfDay = true;
		
		c.active = true;
		
		return c;
	}
	
	public static CourseCategory externalCourse() {
		
        CourseCategory c = new CourseCategory();
		
		c.name = "External Course";
		
		c.description = "The courses offered by external training institutions require payment and consume the annual training budget.";
				
		c.feeRequired = true;
		
		c.allowHalfDay = false;
		
		c.active = true;
		
		return c;
		
	}
	
	public static CourseCategory professionalCertification() {
		
        CourseCategory c = new CourseCategory();
		
		c.name = "Professional Certification";
		
		c.description = "Professional qualification certification examinations require payment of fees and consume the annual training budget.";
				
		c.feeRequired = true;
		
		c.allowHalfDay = false;
		
		c.active = true;
		
		return c;
		
	}
}
