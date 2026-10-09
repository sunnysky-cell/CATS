package sg.edu.iss.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.hamcrest.Matchers.containsString;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.redirectedUrl;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;

import sg.edu.iss.demo.model.ApplicationStatus;
import sg.edu.iss.demo.model.CourseApplication;
import sg.edu.iss.demo.model.CourseCategory;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.repo.CourseApplicationRepository;
import sg.edu.iss.demo.repo.CourseCategoryRepository;
import sg.edu.iss.demo.repo.UserRepository;

/**
 * Regression tests for the manager approval flow views.
 *
 * Guards against the bug found on 2026-10-09: ManagerCourseController returned
 * view names (manager/pending, manager/detail, manager/approved-overlapping,
 * manager/history) whose templates did not exist, producing HTTP 500
 * TemplateInputException on every manager page. These tests fail if any of
 * those templates is missing or cannot render.
 */
@SpringBootTest
@AutoConfigureMockMvc
class ManagerFlowViewTests {

	@Autowired private MockMvc mockMvc;
	@Autowired private UserRepository userRepo;
	@Autowired private CourseCategoryRepository categoryRepo;
	@Autowired private CourseApplicationRepository applicationRepo;

	private MockHttpSession managerSession;
	private Long applicationId;

	@BeforeEach
	void setUp() throws Exception {
		// Log in as the seeded manager (DataInitializer: manager / password123,
		// subordinates emp1 and emp2).
		managerSession = (MockHttpSession) mockMvc.perform(post("/login").with(csrf())
						.param("username", "manager")
						.param("password", "password123"))
				.andExpect(status().is3xxRedirection())
				.andReturn().getRequest().getSession(false);
		assertNotNull(managerSession);

		// Seed one APPLIED application from emp1 (managed by manager) if absent.
		if (applicationId == null) {
			User emp1 = userRepo.findByUsername("emp1").orElseThrow();
			CourseCategory category = categoryRepo.findAll().stream()
					.filter(c -> !c.isFeeRequired())
					.findFirst()
					.orElseGet(() -> categoryRepo.save(CourseCategory.internalTraining()));

			CourseApplication app = new CourseApplication();
			app.setApplicant(emp1);
			app.setCourseTitle("Regression Test Course");
			app.setCategory(category);
			app.setTrainingProvider("ISS");
			app.setStartDate(LocalDate.now().plusDays(30));
			app.setEndDate(LocalDate.now().plusDays(31));
			app.setTrainingDays(new BigDecimal("2.0"));
			app.setJustification("Needed for the regression test suite.");
			app.setStatus(ApplicationStatus.APPLIED);
			applicationId = applicationRepo.save(app).getId();
		}
	}

	@Test
	void pendingPageRenders() throws Exception {
		mockMvc.perform(get("/manager/pending").session(managerSession))
				.andExpect(status().isOk());
	}

	@Test
	void detailPageRendersWithApplicationContent() throws Exception {
		mockMvc.perform(get("/manager/applications/" + applicationId).session(managerSession))
				.andExpect(status().isOk())
				// Assert the template actually renders the seeded data, not empty fields.
				.andExpect(content().string(containsString("Regression Test Course")))
				.andExpect(content().string(containsString("APPLIED")))
				// The approve/reject decision form must be present while status is APPLIED.
				.andExpect(content().string(containsString("/approve")))
				.andExpect(content().string(containsString("/reject")));
	}

	@Test
	void pendingPageListsTheSeededApplication() throws Exception {
		mockMvc.perform(get("/manager/pending").session(managerSession))
				.andExpect(status().isOk())
				.andExpect(content().string(containsString("Regression Test Course")));
	}

	@Test
	void historyPageRenders() throws Exception {
		mockMvc.perform(get("/manager/history").session(managerSession))
				.andExpect(status().isOk());
	}

	@Test
	void approvedOverlappingPageRenders() throws Exception {
		mockMvc.perform(get("/manager/approved-overlapping").session(managerSession)
						.param("startDate", LocalDate.now().plusDays(30).toString())
						.param("endDate", LocalDate.now().plusDays(31).toString()))
				.andExpect(status().isOk());
	}

	@Test
	void approveWithCommentRedirectsToPendingAndPersists() throws Exception {
		mockMvc.perform(post("/manager/applications/" + applicationId + "/approve").with(csrf())
						.session(managerSession)
						.param("comment", "Approved - relevant to current project."))
				.andExpect(status().is3xxRedirection())
				.andExpect(redirectedUrl("/manager/pending"));

		CourseApplication approved = applicationRepo.findById(applicationId).orElseThrow();
		assertEquals(ApplicationStatus.APPROVED, approved.getStatus());
		assertEquals("Approved - relevant to current project.", approved.getManagerComment());
	}
}
