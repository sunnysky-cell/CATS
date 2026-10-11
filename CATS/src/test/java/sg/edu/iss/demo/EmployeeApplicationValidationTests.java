package sg.edu.iss.demo;

import static org.hamcrest.Matchers.containsString;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.redirectedUrl;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

import java.math.BigDecimal;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.temporal.TemporalAdjusters;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import sg.edu.iss.demo.model.ApplicationStatus;
import sg.edu.iss.demo.model.CourseApplication;
import sg.edu.iss.demo.model.CourseCategory;
import sg.edu.iss.demo.model.TrainingEntitlement;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.repo.CourseApplicationRepository;
import sg.edu.iss.demo.repo.CourseCategoryRepository;
import sg.edu.iss.demo.repo.TrainingEntitlementRepository;
import sg.edu.iss.demo.repo.UserRepository;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
class EmployeeApplicationValidationTests {

	@Autowired private MockMvc mockMvc;
	@Autowired private UserRepository userRepo;
	@Autowired private CourseCategoryRepository categoryRepo;
	@Autowired private CourseApplicationRepository applicationRepo;
	@Autowired private TrainingEntitlementRepository entitlementRepo;

	private MockHttpSession empSession;
	private User emp1;
	private CourseCategory internal;
	private LocalDate courseDay;

	@BeforeEach
	void setUp() throws Exception {

		empSession = (MockHttpSession) mockMvc.perform(post("/login").with(csrf())
						.param("username", "emp1")
						.param("password", "password123"))
				.andExpect(status().is3xxRedirection())
				.andReturn().getRequest().getSession(false);

		emp1 = userRepo.findByUsername("emp1").orElseThrow();
		internal = categoryRepo.findByNameIgnoreCase("Internal Training").orElseThrow();
		courseDay = LocalDate.now().plusDays(45).with(TemporalAdjusters.nextOrSame(DayOfWeek.TUESDAY));

		if (entitlementRepo.findByUserIdAndYear(emp1.getId(), courseDay.getYear()).isEmpty()) {
			entitlementRepo.save(TrainingEntitlement.forUser(emp1, courseDay.getYear(), new BigDecimal("2000.00")));
		}
	}

	@Test
	void blankTitleAndJustificationShowFormErrorsAndSaveNothing() throws Exception {

		long before = applicationRepo.count();

		mockMvc.perform(post("/employee/applications").with(csrf()).session(empSession)
						.param("courseTitle", "")
						.param("category.id", internal.getId().toString())
						.param("trainingProvider", "ISS")
						.param("startDate", courseDay.toString())
						.param("endDate", courseDay.toString())
						.param("justification", "   "))
				.andExpect(status().isOk())
				.andExpect(view().name("employee/form"))
				.andExpect(content().string(containsString("The course name cannot be left blank.")))
				.andExpect(content().string(containsString("The reason for the application cannot be left blank.")));

		assertEquals(before, applicationRepo.count());
	}

	@Test
	void blankTitleOnEditKeepsTheSavedTitle() throws Exception {

		CourseApplication app = new CourseApplication();
		app.setApplicant(emp1);
		app.setCourseTitle("Original Title");
		app.setCategory(internal);
		app.setTrainingProvider("ISS");
		app.setStartDate(courseDay);
		app.setEndDate(courseDay);
		app.setTrainingDays(BigDecimal.ONE);
		app.setJustification("Original reason.");
		app.setStatus(ApplicationStatus.APPLIED);
		Long id = applicationRepo.save(app).getId();

		mockMvc.perform(post("/employee/applications/" + id).with(csrf()).session(empSession)
						.param("courseTitle", "")
						.param("category.id", internal.getId().toString())
						.param("trainingProvider", "ISS")
						.param("startDate", courseDay.toString())
						.param("endDate", courseDay.toString())
						.param("justification", "Original reason."))
				.andExpect(status().isOk())
				.andExpect(view().name("employee/form"))
				.andExpect(content().string(containsString("The course name cannot be left blank.")));

		assertEquals("Original Title", applicationRepo.findById(id).orElseThrow().getCourseTitle());
	}

	@Test
	void validApplicationIsSubmitted() throws Exception {

		long before = applicationRepo.count();

		mockMvc.perform(post("/employee/applications").with(csrf()).session(empSession)
						.param("courseTitle", "Valid Course")
						.param("category.id", internal.getId().toString())
						.param("trainingProvider", "ISS")
						.param("startDate", courseDay.toString())
						.param("endDate", courseDay.toString())
						.param("justification", "Useful for my current project."))
				.andExpect(status().is3xxRedirection())
				.andExpect(redirectedUrl("/employee/applications"));

		assertEquals(before + 1, applicationRepo.count());
	}
}
