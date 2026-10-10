package sg.edu.iss.demo.calendar;

import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.intercept.AuthorizationFilter;
import sg.edu.iss.demo.config.SessionAuthenticationFilter;
import sg.edu.iss.demo.model.User;

/** Only the new API receives JSON authentication errors. Existing web routes keep their security chain. */
@Configuration
public class CalendarApiSecurity {
    @Bean
    @Order(0)
    public SecurityFilterChain calendarApiSecurityFilterChain(HttpSecurity http) throws Exception {
        http.securityMatcher("/api/calendar/**")
            .addFilterBefore(new SessionAuthenticationFilter(), AuthorizationFilter.class)
            .authorizeHttpRequests(authorize -> authorize.anyRequest().authenticated())
            .formLogin(form -> form.disable())
            .httpBasic(basic -> basic.disable())
            .logout(logout -> logout.disable())
            .exceptionHandling(errors -> errors
                .authenticationEntryPoint((request, response, exception) -> jsonError(response, 401,
                    "AUTH", "Your session has expired. Sign in again."))
                .accessDeniedHandler((request, response, exception) -> {
                    var session = request.getSession(false);
                    Object user = session == null ? null : session.getAttribute("loggedInUser");
                    if (!(user instanceof User account) || account.getId() == null) {
                        jsonError(response, 401, "AUTH", "Your session has expired. Sign in again.");
                    } else {
                        jsonError(response, 403, "CSRF",
                            "The security token is missing or expired. Refresh the calendar and try again.");
                    }
                }));
        // Leave Spring Security's default CSRF filter and HttpSession token repository enabled.
        return http.build();
    }

    private static void jsonError(HttpServletResponse response, int status, String code, String message)
        throws IOException {
        response.setStatus(status);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Cache-Control", "no-store");
        // Both strings are server constants; no user data or exception details enter this JSON.
        response.getWriter().write("{\"code\":\"" + code + "\",\"message\":\"" + message + "\"}");
    }
}
