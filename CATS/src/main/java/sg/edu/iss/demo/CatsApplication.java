package sg.edu.iss.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.security.autoconfigure.UserDetailsServiceAutoConfiguration;

// UserDetailsServiceAutoConfiguration is excluded because CATS authenticates
// through its own login flow (LoginController + AuthService + HttpSession)
// backed by the User table, not through Spring Security's default in-memory
// user. Without this exclusion Boot generates an unused random password and
// logs a misleading "must be updated before production" warning.
@SpringBootApplication(exclude = UserDetailsServiceAutoConfiguration.class)
public class CatsApplication {

	public static void main(String[] args) {
		SpringApplication.run(CatsApplication.class, args);
	}

}
