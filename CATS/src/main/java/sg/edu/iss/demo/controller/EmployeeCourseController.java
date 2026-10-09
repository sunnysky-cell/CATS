package sg.edu.iss.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.HttpSession;
import sg.edu.iss.demo.model.CourseApplication;
import sg.edu.iss.demo.model.CourseCategory;
import sg.edu.iss.demo.model.Role;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.repo.CourseCategoryRepository;
import sg.edu.iss.demo.service.CourseApplicationService;

/**
 * Employee-facing course application controller.
 *
 * Business method names match the UML diagram: showApplicationForm /
 * submitApplication / viewPersonalHistory / viewApplication / updateApplication
 * / cancelApplication / completeApplication
 *
 * Spring MVC requires @GetMapping/@PostMapping annotations, HttpSession (to
 * read the logged-in user, because the project uses manual session login
 * instead of Spring Security), Model (to expose data to Thymeleaf)
 * and @PathVariable /
 * 
 * @ModelAttribute / @RequestParam to bind web parameters. These are container
 *                 injection parameters and do not change the business
 *                 signature.
 */
@Controller
@RequestMapping("/employee")
public class EmployeeCourseController {

	private final CourseApplicationService courseApplicationService;
	private final CourseCategoryRepository courseCategoryRepository;

	public EmployeeCourseController(CourseApplicationService courseApplicationService,
			CourseCategoryRepository courseCategoryRepository) {

		this.courseApplicationService = courseApplicationService;
		this.courseCategoryRepository = courseCategoryRepository;
	}

	@GetMapping("/applications/new")
	public String showApplicationForm(HttpSession session, Model model) {

		User user = requireEmployee(session);

		CourseApplication form = new CourseApplication();

		form.setCategory(new CourseCategory());

		model.addAttribute("form", form);
		model.addAttribute("categories", courseCategoryRepository.findByActiveTrue());
		model.addAttribute("isNew", true);

		return "employee/form";
	}

	@PostMapping("/applications")
	public String submitApplication(@ModelAttribute("form") CourseApplication form, HttpSession session, Model model,
			RedirectAttributes redirectAttributes) {

		User user = requireEmployee(session);

		resolveCategory(form);

		List<String> errors = courseApplicationService.validate(form, user, null);
		if (!errors.isEmpty()) {
			model.addAttribute("errors", errors);
			model.addAttribute("categories", courseCategoryRepository.findByActiveTrue());
			model.addAttribute("isNew", true);
			return "employee/form";
		}

		courseApplicationService.submit(form, user.getId());

		redirectAttributes.addFlashAttribute("success", "Course application submitted. Awaiting manager approval.");

		return "redirect:/employee/applications";
	}

	@GetMapping("/applications")
	public String viewPersonalHistory(HttpSession session, Model model) {

		User user = requireEmployee(session);

		List<CourseApplication> applications = courseApplicationService.findMyHistory(user.getId());

		model.addAttribute("applications", applications);
		model.addAttribute("user", user);

		return "employee/history";
	}

	@GetMapping("/applications/{id}")
	public String viewApplication(@PathVariable Long id, HttpSession session, Model model) {

		User user = requireEmployee(session);

		CourseApplication application = courseApplicationService.findById(id);

		if (application == null || application.getApplicant() == null
				|| !application.getApplicant().getId().equals(user.getId())) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}

		// NOTE: model key must NOT be "application" — Thymeleaf's built-in
		// 'application' variable shadows it, breaking the detail template.
		model.addAttribute("app", application);

		return "employee/detail";
	}

	@GetMapping("/applications/{id}/edit")
	public String showEditForm(@PathVariable Long id, HttpSession session, Model model) {

		User user = requireEmployee(session);

		CourseApplication existing = courseApplicationService.findById(id);

		if (existing == null || existing.getApplicant() == null
				|| !existing.getApplicant().getId().equals(user.getId())) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}

		if (existing.getCategory() == null) {
			existing.setCategory(new CourseCategory());
		}

		model.addAttribute("form", existing);
		model.addAttribute("categories", courseCategoryRepository.findByActiveTrue());
		model.addAttribute("isNew", false);

		return "employee/form";
	}

	@PostMapping("/applications/{id}")
	public String updateApplication(@PathVariable Long id, @ModelAttribute("form") CourseApplication form,
			HttpSession session, Model model, RedirectAttributes redirectAttributes) {

		User user = requireEmployee(session);

		form.setId(id);

		resolveCategory(form);

		List<String> errors = courseApplicationService.validate(form, user, id);
		if (!errors.isEmpty()) {
			model.addAttribute("errors", errors);
			model.addAttribute("categories", courseCategoryRepository.findByActiveTrue());
			model.addAttribute("isNew", false);
			return "employee/form";
		}

		try {
			courseApplicationService.update(form, user.getId());
			redirectAttributes.addFlashAttribute("success", "Application updated.");
		} catch (IllegalStateException ex) {
			redirectAttributes.addFlashAttribute("error", ex.getMessage());
		}

		return "redirect:/employee/applications/" + id;
	}

	@PostMapping("/applications/{id}/cancel")
	public String cancelApplication(@PathVariable Long id, HttpSession session, RedirectAttributes redirectAttributes) {

		User user = requireEmployee(session);

		try {
			courseApplicationService.cancel(id, user.getId());
			redirectAttributes.addFlashAttribute("success", "Application cancelled.");
		} catch (IllegalStateException ex) {
			redirectAttributes.addFlashAttribute("error", ex.getMessage());
		}

		return "redirect:/employee/applications/" + id;
	}

	@PostMapping("/applications/{id}/complete")
	public String completeApplication(@PathVariable Long id,
			@RequestParam(value = "experienceComment", required = false) String experienceComment, HttpSession session,
			RedirectAttributes redirectAttributes) {

		User user = requireEmployee(session);

		try {
			courseApplicationService.markCompleted(id, user.getId(), experienceComment);
			redirectAttributes.addFlashAttribute("success", "Application marked as completed.");
		} catch (IllegalStateException ex) {
			redirectAttributes.addFlashAttribute("error", ex.getMessage());
		}

		return "redirect:/employee/applications/" + id;
	}

	private User requireEmployee(HttpSession session) {
		User user = (User) session.getAttribute("loggedInUser");
		if (user == null) {
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Please login");
		}
		return user;
	}

	/**
	 * Thymeleaf posts category.id as a number; Spring binds it onto an empty
	 * CourseCategory shell. Replace that shell with the managed entity so JPA does
	 * not try to persist a bogus new row.
	 */
	private void resolveCategory(CourseApplication form) {
		if (form.getCategory() != null && form.getCategory().getId() != null) {
			CourseCategory managed = courseCategoryRepository.findById(form.getCategory().getId()).orElse(null);
			form.setCategory(managed);
		}
	}
}
