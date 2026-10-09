package sg.edu.iss.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
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
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "Username cannot be empty")
	@Size(min = 3, max = 50, message = "The username should be between 3 and 50 characters long.")
	@Pattern(regexp = "^[a-zA-Z0-9_.-]+$", message = "The username can only consist of letters, numbers, underscores, dots and hyphens.")
	@Column(nullable = false, unique = true, length = 50)
	private String username;

	@NotBlank(message = "Password cannot be empty")
	@Size(min = 8, message = "The password must be at least 8 characters long.")
	@Column(nullable = false, length = 100)
	private String password;

	@NotBlank(message = "Name cannot be left blank.")
	@Size(max = 100)
	@Column(nullable = false, length = 100)
	private String name;

	@Enumerated(EnumType.STRING)
	private Role role;

	private String email;

	@NotBlank(message = "The job level cannot be left blank.")
	@Column(nullable = false, length = 100)
	private String designation;

	private boolean enabled;

	@ManyToOne
	@JoinColumn(name = "manager_id")
	@ToString.Exclude
	@EqualsAndHashCode.Exclude
	private User manager;


}
