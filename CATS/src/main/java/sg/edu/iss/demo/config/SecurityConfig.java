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

/**
 * Security configuration for CATS (optional feature:
 * "Secure the application using Spring Security").
 *
 * <p>Design notes:</p>
 * <ul>
 *   <li>The team's existing custom login flow (LoginController + HttpSession
 *       attribute "loggedInUser") is KEPT. Spring Security does not replace it;
 *       instead {@link SessionAuthenticationFilter} bridges the session user
 *       into the SecurityContext on every request.</li>
 *   <li>CSRF protection stays ENABLED. All Thymeleaf forms use th:action, so
 *       Spring Boot auto-injects the CSRF hidden field - no template changes
 *       were required.</li>
 *   <li>Role rules: /manager/** requires MANAGER or ADMIN, /admin/** requires
 *       ADMIN, everything except the public login pages requires an
 *       authenticated (logged-in) user.</li>
 * </ul>
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

		http
			// Bridge: copy the custom-session user into the SecurityContext
			// before the authorization filter runs.
			.addFilterBefore(new SessionAuthenticationFilter(), AuthorizationFilter.class)

			.authorizeHttpRequests(auth -> auth
				// Public entry points (two separate URLs per CA instructions)
				.requestMatchers("/", "/login", "/admin/login").permitAll()
				// Container error dispatch (403/500 pages) must stay reachable,
				// otherwise a denied request is re-dispatched to /error, denied
				// again as anonymous and the real status is replaced by a
				// redirect to /login.
				.requestMatchers("/error").permitAll()
				// Role-based protection
				.requestMatchers("/manager/**").hasAnyRole("MANAGER", "ADMIN")
				.requestMatchers("/admin/**").hasRole("ADMIN")
				// Everything else: must be logged in
				.anyRequest().authenticated()
			)

			// We keep the team's own login form/controller, so disable the
			// built-in form login, HTTP basic and logout filter, and simply
			// redirect unauthenticated users to /login.
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
