package sg.edu.iss.demo;

import static org.assertj.core.api.Assertions.assertThat;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.boot.jdbc.test.autoconfigure.AutoConfigureTestDatabase;
import org.springframework.boot.jpa.test.autoconfigure.TestEntityManager;
import org.springframework.data.domain.Pageable;

import sg.edu.iss.demo.model.ApplicationStatus;
import sg.edu.iss.demo.model.CourseApplication;
import sg.edu.iss.demo.model.CourseCategory;
import sg.edu.iss.demo.model.Role;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.repo.CourseApplicationRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class CourseApplicationRepositoryTests {

	@Autowired private CourseApplicationRepository applications;
	@Autowired private TestEntityManager entityManager;

	private static final List<ApplicationStatus> ACTIVE =
			List.of(ApplicationStatus.APPLIED, ApplicationStatus.UPDATED, ApplicationStatus.APPROVED);

	private User manager;
	private User otherManager;
	private User emp1;
	private User emp2;
	private User emp3;
	private CourseCategory internal;

	private CourseApplication emp1Approved;

	private User newUser(String username, String name, Role role, User boss) {
		User u = new User();
		u.setUsername(username);
		u.setPassword("password123");
		u.setName(name);
		u.setRole(role);
		u.setDesignation("Professional");
		u.setEnabled(true);
		u.setManager(boss);
		return entityManager.persist(u);
	}

	private CourseApplication newApplication(User applicant, String title, ApplicationStatus status,
			LocalDate start, LocalDate end) {
		CourseApplication a = new CourseApplication();
		a.setApplicant(applicant);
		a.setCourseTitle(title);
		a.setCategory(internal);
		a.setTrainingProvider("ISS");
		a.setStartDate(start);
		a.setEndDate(end);
		a.setTrainingDays(BigDecimal.ONE);
		a.setJustification("Needed for work.");
		a.setStatus(status);
		return entityManager.persist(a);
	}

	@BeforeEach
	void seedData() {
		internal = entityManager.persist(CourseCategory.internalTraining());

		manager = newUser("manager", "Norman Manager", Role.MANAGER, null);
		otherManager = newUser("manager2", "Other Manager", Role.MANAGER, null);
		emp1 = newUser("emp1", "Alice", Role.EMPLOYEE, manager);
		emp2 = newUser("emp2", "Bob", Role.EMPLOYEE, manager);
		emp3 = newUser("emp3", "Carol", Role.EMPLOYEE, otherManager);

		emp1Approved = newApplication(emp1, "Java Basics", ApplicationStatus.APPROVED,
				LocalDate.of(2030, 11, 4), LocalDate.of(2030, 11, 6));
		newApplication(emp2, "Spring Boot", ApplicationStatus.APPROVED,
				LocalDate.of(2030, 11, 5), LocalDate.of(2030, 11, 7));
		newApplication(emp3, "Other Team Course", ApplicationStatus.APPROVED,
				LocalDate.of(2030, 11, 5), LocalDate.of(2030, 11, 5));
		newApplication(emp2, "Still Pending", ApplicationStatus.APPLIED,
				LocalDate.of(2030, 11, 5), LocalDate.of(2030, 11, 5));
		newApplication(emp1, "Rejected Course", ApplicationStatus.REJECTED,
				LocalDate.of(2030, 11, 12), LocalDate.of(2030, 11, 12));
		newApplication(emp2, "Across Two Months", ApplicationStatus.APPROVED,
				LocalDate.of(2030, 10, 30), LocalDate.of(2030, 11, 1));
		newApplication(emp1, "Next Year Course", ApplicationStatus.APPLIED,
				LocalDate.of(2031, 2, 4), LocalDate.of(2031, 2, 4));

		entityManager.flush();
		entityManager.clear();
	}

	@Test
	void approvedOverlappingOnlyListsOtherSubordinatesOfTheManager() {
		List<CourseApplication> result = applications.findApprovedOverlapping(manager.getId(), emp1.getId(),
				LocalDate.of(2030, 11, 5), LocalDate.of(2030, 11, 5));

		assertThat(result).extracting(CourseApplication::getCourseTitle)
				.containsExactly("Spring Boot");
	}

	@Test
	void approvedOverlappingWithoutExcludeListsWholeTeamByStartDate() {
		List<CourseApplication> result = applications.findApprovedOverlapping(manager.getId(), -1L,
				LocalDate.of(2030, 11, 1), LocalDate.of(2030, 11, 30));

		assertThat(result).extracting(CourseApplication::getCourseTitle)
				.containsExactly("Across Two Months", "Java Basics", "Spring Boot");
	}

	@Test
	void overlapCheckFindsActiveApplicationOfSameEmployee() {
		boolean overlap = applications.existsOverlappingApplicationExcluding(emp1.getId(),
				LocalDate.of(2030, 11, 6), LocalDate.of(2030, 11, 8), ACTIVE, -1L);

		assertThat(overlap).isTrue();
	}

	@Test
	void overlapCheckIgnoresTheApplicationBeingEdited() {
		boolean overlap = applications.existsOverlappingApplicationExcluding(emp1.getId(),
				LocalDate.of(2030, 11, 4), LocalDate.of(2030, 11, 6), ACTIVE, emp1Approved.getId());

		assertThat(overlap).isFalse();
	}

	@Test
	void overlapCheckIgnoresRejectedApplications() {
		boolean overlap = applications.existsOverlappingApplicationExcluding(emp1.getId(),
				LocalDate.of(2030, 11, 12), LocalDate.of(2030, 11, 12), ACTIVE, -1L);

		assertThat(overlap).isFalse();
	}

	@Test
	void activeApplicationsAreCountedByStartYear() {
		List<CourseApplication> result = applications.findActiveByUserAndYear(emp1.getId(), 2030, ACTIVE);

		assertThat(result).extracting(CourseApplication::getCourseTitle)
				.containsExactly("Java Basics");
	}

	@Test
	void pendingListOnlyShowsAppliedOrUpdatedOfOwnTeam() {
		List<CourseApplication> result = applications.findByManagerIdAndStatusIn(manager.getId(),
				List.of(ApplicationStatus.APPLIED, ApplicationStatus.UPDATED), Pageable.unpaged());

		assertThat(result).extracting(CourseApplication::getCourseTitle)
				.containsExactlyInAnyOrder("Still Pending", "Next Year Course");
	}

	@Test
	void trainingCalendarShowsApprovedCoursesAcrossMonths() {
		List<CourseApplication> october = applications.findCalendarApplications(ApplicationStatus.APPROVED,
				LocalDate.of(2030, 10, 1), LocalDate.of(2030, 10, 31));
		List<CourseApplication> november = applications.findCalendarApplications(ApplicationStatus.APPROVED,
				LocalDate.of(2030, 11, 1), LocalDate.of(2030, 11, 30));

		assertThat(october).extracting(CourseApplication::getCourseTitle)
				.containsExactly("Across Two Months");
		assertThat(november).extracting(CourseApplication::getCourseTitle)
				.containsExactly("Across Two Months", "Java Basics", "Spring Boot", "Other Team Course");
	}
}
