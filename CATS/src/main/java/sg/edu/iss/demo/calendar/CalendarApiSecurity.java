package sg.edu.iss.demo.calendar;

import java.io.IOException;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.intercept.AuthorizationFilter;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import sg.edu.iss.demo.config.SessionAuthenticationFilter;
import sg.edu.iss.demo.model.User;

@Configuration
public class CalendarApiSecurity {

	@Bean
	@Order(0)
	public SecurityFilterChain calendarApiSecurityFilterChain(HttpSecurity http) throws Exception {

		http
			.securityMatcher("/api/calendar/**")
			.addFilterBefore(new SessionAuthenticationFilter(), AuthorizationFilter.class)
			.authorizeHttpRequests(auth -> auth.anyRequest().authenticated())
			.formLogin(form -> form.disable())
			.httpBasic(basic -> basic.disable())
			.logout(logout -> logout.disable())
			.exceptionHandling(ex -> ex
				.authenticationEntryPoint((request, response, error) -> {
					writeJsonError(response, 401, "AUTH", "Your session has expired. Sign in again.");
				})
				.accessDeniedHandler((request, response, error) -> {

					HttpSession session = request.getSession(false);

					Object attr = session == null ? null : session.getAttribute("loggedInUser");

					if (!(attr instanceof User user) || user.getId() == null) {
						writeJsonError(response, 401, "AUTH", "Your session has expired. Sign in again.");
					} else {
						writeJsonError(response, 403, "CSRF",
								"The security token is missing or expired. Refresh the calendar and try again.");
					}
				})
			);

		return http.build();
	}

	private static void writeJsonError(HttpServletResponse response, int status, String code, String message)
			throws IOException {

		response.setStatus(status);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.setHeader("Cache-Control", "no-store");
		response.getWriter().write("{\"code\":\"" + code + "\",\"message\":\"" + message + "\"}");
	}
}
