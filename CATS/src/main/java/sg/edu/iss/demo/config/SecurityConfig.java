package sg.edu.iss.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.intercept.AuthorizationFilter;
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

		http
			.addFilterBefore(new SessionAuthenticationFilter(), AuthorizationFilter.class)

			.authorizeHttpRequests(auth -> auth
				// Public entry points (two separate URLs per CA instructions)
				.requestMatchers("/", "/login", "/admin/login").permitAll()
				.requestMatchers("/assets/**").permitAll()
				// without this, 403/500 error pages redirect to /login
				.requestMatchers("/error").permitAll()
				.requestMatchers("/manager/**").hasAnyRole("MANAGER", "ADMIN")
				.requestMatchers("/admin/**").hasRole("ADMIN")
				.anyRequest().authenticated()
			)

			// login and logout are handled by LoginController
			.formLogin(form -> form.disable())
			.httpBasic(basic -> basic.disable())
			.logout(logout -> logout.disable())

			.exceptionHandling(ex -> ex
				.authenticationEntryPoint(new LoginUrlAuthenticationEntryPoint("/login"))
			);

		return http.build();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
