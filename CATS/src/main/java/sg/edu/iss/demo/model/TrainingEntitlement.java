package sg.edu.iss.demo.model;

import java.math.BigDecimal;

import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "training_entitlement",
               uniqueConstraints = @UniqueConstraint(
    		   name = "uk_entitlement_user_year",
    		   columnNames = {"user_id","entitlement_year"}
    		   ))
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TrainingEntitlement {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull(message = "Please select the employees.")
	@ManyToOne
	@ToString.Exclude
	@EqualsAndHashCode.Exclude
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

	@Column(name = "entitlement_year")
	@NotNull(message = "The year cannot be left blank.")
    @Min(value = 2000, message = "The year should be between 2000 and 2100.")
    @Max(value = 2100, message = "The year should be between 2000 and 2100.")
	private Integer year;

	@NotNull(message = "The training duration limit cannot be left blank.")
	@DecimalMin(value = "0.0")
	@DecimalMax(value = "365.0")
	@Digits(integer = 3, fraction = 1)
	@Column(nullable = false, precision = 5, scale = 1)
	private BigDecimal entitledDays;

	@NotNull(message = "The annual budget cannot be empty.")
	@DecimalMin(value = "0.0")
	@DecimalMax(value = "999999.99")
	@Digits(integer = 6, fraction = 2)
	@Column(nullable = false, precision = 10, scale = 2)
	private BigDecimal annualBudget;
	
	public static TrainingEntitlement forAdministrative(User user, int year, BigDecimal annualBudget) {
		
		TrainingEntitlement A = new TrainingEntitlement();
		
		A.user = user;
		
		A.year = year;
		
		A.entitledDays = new BigDecimal("5.0");
		
		A.annualBudget = annualBudget; 
		
		return A;
	}
	
    public static TrainingEntitlement forProfessional(User user, int year, BigDecimal annualBudget) {
		
		TrainingEntitlement A = new TrainingEntitlement();
		
		A.user = user;
		
		A.year = year;
		
		A.entitledDays = new BigDecimal("10.0");
		
		A.annualBudget = annualBudget; 
		
		return A;
		
    }
		
	public static TrainingEntitlement forUser(User user, int year, BigDecimal annualBudget) {
			
			String D = user.getDesignation();
			
			if(D != null && D.toLowerCase().contains("administrative")) {
				
				return forAdministrative(user, year, annualBudget);
				
			}
			
			else {
				
				return forProfessional(user, year, annualBudget);
				
			}
				
			
		}
}
