package sg.edu.iss.demo;

import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.comparesEqualTo;
import static org.hamcrest.Matchers.not;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.math.BigDecimal;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDate;
import java.time.LocalDateTime;

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
class DashboardAllowanceTests {
    @Autowired private MockMvc mvc;
    @Autowired private UserRepository users;
    @Autowired private CourseCategoryRepository categories;
    @Autowired private CourseApplicationRepository applications;
    @Autowired private TrainingEntitlementRepository entitlements;

    private MockHttpSession sessionFor(User user) {
        MockHttpSession session = new MockHttpSession();
        session.setAttribute("loggedInUser", user);
        return session;
    }

    private TrainingEntitlement allowance(User user) {
        return entitlements.findByUserIdAndYear(user.getId(), LocalDate.now().getYear()).orElseThrow();
    }

    private void application(User user, ApplicationStatus status, int year) {
        CourseCategory category = categories.findAll().stream().filter(CourseCategory::isFeeRequired).findFirst().orElseThrow();
        CourseApplication application = new CourseApplication();
        application.setApplicant(user);
        application.setCategory(category);
        application.setCourseTitle("Allowance check");
        application.setTrainingProvider("ISS");
        application.setStartDate(LocalDate.of(year, 11, 2));
        application.setEndDate(LocalDate.of(year, 11, 3));
        application.setTrainingDays(new BigDecimal("1.5"));
        application.setCourseFee(new BigDecimal("100.25"));
        application.setJustification("Annual allowance calculation.");
        application.setStatus(status);
        application.setCreatedAt(LocalDateTime.now());
        application.setUpdatedAt(LocalDateTime.now());
        applications.saveAndFlush(application);
    }

    @Test
    void allowanceCountsActiveCurrentYearApplicationsForOnlyTheLoggedInEmployee() throws Exception {
        User employee = users.findByUsername("emp1").orElseThrow();
        int year = LocalDate.now().getYear();
        for (ApplicationStatus status : ApplicationStatus.values()) application(employee, status, year);
        application(employee, ApplicationStatus.APPROVED, year - 1);
        application(users.findByUsername("emp2").orElseThrow(), ApplicationStatus.APPROVED, year);

        var result = mvc.perform(get("/home").session(sessionFor(employee)))
            .andExpect(status().isOk())
            .andExpect(content().string(containsString("Your annual allowance")))
            .andExpect(content().string(containsString("Used or reserved")))
            .andReturn();
        var attributes = result.getModelAndView().getModel();
        assertEquals(0, new BigDecimal("6.0").compareTo((BigDecimal) attributes.get("usedTrainingDays")));
        assertEquals(0, new BigDecimal("401.00").compareTo((BigDecimal) attributes.get("usedTrainingBudget")));
        assertEquals(0, new BigDecimal("4.0").compareTo((BigDecimal) attributes.get("remainingTrainingDays")));
        assertEquals(0, allowance(employee).getAnnualBudget().subtract(new BigDecimal("401.00"))
            .compareTo((BigDecimal) attributes.get("remainingTrainingBudget")));

        String previewPath = System.getProperty("cats.allowance.preview");
        if (previewPath != null) {
            Files.writeString(Path.of(previewPath), result.getResponse().getContentAsString());
            var history = mvc.perform(get("/employee/applications").session(sessionFor(employee)))
                .andExpect(status().isOk()).andReturn().getResponse().getContentAsString();
            Files.writeString(Path.of(previewPath).resolveSibling("dashboard-requests-preview.html"), history);
        }
    }

    @Test
    void missingConfigurationIsShownWithoutInventingAnAllowance() throws Exception {
        User employee = users.findByUsername("emp1").orElseThrow();
        entitlements.delete(allowance(employee));
        entitlements.flush();
        mvc.perform(get("/home").session(sessionFor(employee)))
            .andExpect(status().isOk())
            .andExpect(content().string(containsString("Allowance not configured")))
            .andExpect(model().attributeDoesNotExist("remainingTrainingBudget"));
    }

    @Test
    void zeroAllowanceAndExcessUsageRenderWithoutInvalidProgress() throws Exception {
        User employee = users.findByUsername("emp1").orElseThrow();
        TrainingEntitlement entitlement = allowance(employee);
        entitlement.setAnnualBudget(BigDecimal.ZERO);
        entitlement.setEntitledDays(BigDecimal.ZERO);
        entitlements.saveAndFlush(entitlement);
        mvc.perform(get("/home").session(sessionFor(employee)))
            .andExpect(status().isOk())
            .andExpect(model().attribute("daysRemainingPercent", comparesEqualTo(BigDecimal.ZERO)))
            .andExpect(model().attribute("budgetRemainingPercent", comparesEqualTo(BigDecimal.ZERO)));
        application(employee, ApplicationStatus.APPROVED, LocalDate.now().getYear());
        mvc.perform(get("/home").session(sessionFor(employee)))
            .andExpect(status().isOk())
            .andExpect(model().attribute("daysRemainingPercent", comparesEqualTo(BigDecimal.ZERO)))
            .andExpect(model().attribute("budgetRemainingPercent", comparesEqualTo(BigDecimal.ZERO)))
            .andExpect(content().string(containsString("exceed this year's budget")));
    }

    @Test
    void managerSeesOwnAllowanceAndAdminHasNoEmployeeAllowancePanel() throws Exception {
        User manager = users.findByUsername("manager").orElseThrow();
        application(users.findByUsername("emp1").orElseThrow(), ApplicationStatus.APPROVED, LocalDate.now().getYear());
        mvc.perform(get("/home").session(sessionFor(manager)))
            .andExpect(status().isOk())
            .andExpect(content().string(containsString("Your personal allowance")))
            .andExpect(model().attribute("usedTrainingBudget", BigDecimal.ZERO));
        mvc.perform(get("/home").session(sessionFor(users.findByUsername("admin").orElseThrow())))
            .andExpect(status().isOk())
            .andExpect(content().string(not(containsString("id=\"entitlement-heading\""))))
            .andExpect(model().attributeDoesNotExist("annualEntitlement"));
    }
}
