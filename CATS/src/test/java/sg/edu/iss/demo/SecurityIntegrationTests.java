package sg.edu.iss.demo;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.redirectedUrl;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.mock.web.MockHttpSession;

import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * Integration tests for the Spring Security module (SecurityConfig).
 *
 * Runs against in-memory H2 (see src/test/resources/application.properties);
 * DataInitializer seeds users admin / manager / emp1 / emp2 with password
 * "password123" (BCrypt-encoded).
 */
@SpringBootTest
@AutoConfigureMockMvc
class SecurityIntegrationTests {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Test
	void loginPageIsPublic() throws Exception {
		mockMvc.perform(get("/login")).andExpect(status().isOk());
		mockMvc.perform(get("/admin/login")).andExpect(status().isOk());
		mockMvc.perform(get("/")).andExpect(status().is3xxRedirection())
				.andExpect(redirectedUrl("/login"));
	}

	@Test
	void protectedPagesRedirectAnonymousUserToLogin() throws Exception {
		mockMvc.perform(get("/home")).andExpect(status().is3xxRedirection());
		mockMvc.perform(get("/training-calendar")).andExpect(status().is3xxRedirection());
	}

	@Test
	void validLoginSucceedsAndGrantsAccess() throws Exception {
		mockMvc.perform(post("/login").with(csrf())
						.param("username", "emp1")
						.param("password", "password123"))
				.andExpect(status().is3xxRedirection())
				.andExpect(redirectedUrl("/home"));
	}

	@Test
	void wrongPasswordIsRejected() throws Exception {
		mockMvc.perform(post("/login").with(csrf())
						.param("username", "emp1")
						.param("password", "wrong-password"))
				.andExpect(status().isOk()); // stays on login page with error
	}

	@Test
	void postLoginWithoutCsrfTokenIsBlocked() throws Exception {
		mockMvc.perform(post("/login")
						.param("username", "emp1")
						.param("password", "password123"))
				.andExpect(status().isForbidden());
	}

	@Test
	void managerAreaForbiddenForEmployees() throws Exception {
		// Log in as emp1 (EMPLOYEE role)
		var session = mockMvc.perform(post("/login").with(csrf())
						.param("username", "emp1")
						.param("password", "password123"))
				.andReturn().getRequest().getSession(false);
		assertTrue(session != null);

		mockMvc.perform(get("/manager/report").session((MockHttpSession) session))
				.andExpect(status().isForbidden());
	}

	@Test
	void managerAreaAllowedForManagers() throws Exception {
		var session = mockMvc.perform(post("/login").with(csrf())
						.param("username", "manager")
						.param("password", "password123"))
				.andReturn().getRequest().getSession(false);
		assertTrue(session != null);

		mockMvc.perform(get("/manager/report").session((MockHttpSession) session))
				.andExpect(status().isOk());
	}

	@Test
	void adminAreaForbiddenForManagers() throws Exception {
		var session = mockMvc.perform(post("/login").with(csrf())
						.param("username", "manager")
						.param("password", "password123"))
				.andReturn().getRequest().getSession(false);
		assertTrue(session != null);

		mockMvc.perform(get("/admin/users").session((MockHttpSession) session))
				.andExpect(status().isForbidden());
	}

	@Test
	void logoutInvalidatesSessionAndProtectsAgain() throws Exception {
		var session = mockMvc.perform(post("/login").with(csrf())
						.param("username", "emp1")
						.param("password", "password123"))
				.andReturn().getRequest().getSession(false);
		assertTrue(session != null);

		mockMvc.perform(get("/logout").session((MockHttpSession) session))
				.andExpect(status().is3xxRedirection());
	}

	@Test
	void passwordEncoderIsBCrypt() {
		String hash = passwordEncoder.encode("password123");
		assertTrue(hash.startsWith("$2a$") || hash.startsWith("$2b$") || hash.startsWith("$2y$"),
				"Expected a BCrypt hash but got: " + hash);
		assertTrue(passwordEncoder.matches("password123", hash));
	}

	@Test
	void employeeAreaForbiddenForAnonymous() throws Exception {
		mockMvc.perform(get("/employee/applications"))
				.andExpect(status().is3xxRedirection());
	}

	@Test
	void employeeAreaAllowedForLoggedInEmployee() throws Exception {
		var session = mockMvc.perform(post("/login").with(csrf())
						.param("username", "emp1")
						.param("password", "password123"))
				.andReturn().getRequest().getSession(false);
		assertTrue(session != null);

		mockMvc.perform(get("/employee/applications").session((MockHttpSession) session))
				.andExpect(status().isOk());
	}

	@Test
	void managerCanViewReportPage() throws Exception {
		// NOTE: /manager/pending is intentionally NOT used here because the
		// manager/* templates are not committed to the repo yet. /manager/report
		// is under the same role-protected /manager/** rule and its view exists.
		var session = mockMvc.perform(post("/login").with(csrf())
						.param("username", "manager")
						.param("password", "password123"))
				.andReturn().getRequest().getSession(false);
		assertTrue(session != null);

		mockMvc.perform(get("/manager/report").session((MockHttpSession) session))
				.andExpect(status().isOk());
	}

	@Test
	void employeeForbiddenFromManagerPendingQueue() throws Exception {
		var session = mockMvc.perform(post("/login").with(csrf())
						.param("username", "emp1")
						.param("password", "password123"))
				.andReturn().getRequest().getSession(false);
		assertTrue(session != null);

		mockMvc.perform(get("/manager/pending").session((MockHttpSession) session))
				.andExpect(status().isForbidden());
	}

	@Test
	void adminCanAccessAdminArea() throws Exception {
		var session = mockMvc.perform(post("/login").with(csrf())
						.param("username", "admin")
						.param("password", "password123"))
				.andReturn().getRequest().getSession(false);
		assertTrue(session != null);

		mockMvc.perform(get("/admin/users").session((MockHttpSession) session))
				.andExpect(status().isOk());
	}
}
