package sg.edu.iss.demo.config;

import java.io.IOException;
import java.util.List;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import sg.edu.iss.demo.model.User;

/**
 * Bridges CATS' existing custom login (session attribute "loggedInUser",
 * set by LoginController) into the Spring Security SecurityContext, so that
 * the URL authorization rules in {@link SecurityConfig} can enforce roles.
 *
 * <p>The principal is the JPA {@link User} entity already stored in the
 * session; the granted authority is ROLE_ADMIN / ROLE_MANAGER / ROLE_EMPLOYEE
 * derived from {@code user.getRole()}.</p>
 *
 * <p>Note: this filter runs after Spring Security's AnonymousAuthenticationFilter,
 * so the check must also treat an anonymous token as "not authenticated yet".</p>
 */
public class SessionAuthenticationFilter extends OncePerRequestFilter {

	@Override
	protected void doFilterInternal(HttpServletRequest request,
			HttpServletResponse response,
			FilterChain filterChain) throws ServletException, IOException {

		Authentication current = SecurityContextHolder.getContext().getAuthentication();

		if (current == null || !current.isAuthenticated() || current instanceof AnonymousAuthenticationToken) {

			HttpSession session = request.getSession(false);

			if (session != null) {

				Object attr = session.getAttribute("loggedInUser");

				if (attr instanceof User user && user.getRole() != null) {

					UsernamePasswordAuthenticationToken authentication =
							new UsernamePasswordAuthenticationToken(
									user,
									null,
									List.of(new SimpleGrantedAuthority("ROLE_" + user.getRole().name())));

					SecurityContextHolder.getContext().setAuthentication(authentication);
				}
			}
		}

		filterChain.doFilter(request, response);
	}
}
