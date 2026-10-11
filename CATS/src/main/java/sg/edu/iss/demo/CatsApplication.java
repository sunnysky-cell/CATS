package sg.edu.iss.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.security.autoconfigure.UserDetailsServiceAutoConfiguration;

// we use our own login, so Spring Security's default in-memory user is not needed
@SpringBootApplication(exclude = UserDetailsServiceAutoConfiguration.class)
public class CatsApplication {

	public static void main(String[] args) {
		SpringApplication.run(CatsApplication.class, args);
	}

}
