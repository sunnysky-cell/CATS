package sg.edu.iss.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import sg.edu.iss.demo.service.CourseApplicationService;
import java.util.List;

import sg.edu.iss.demo.repo.CourseApplicationRepository;

import org.springframework.data.domain.Pageable;
import sg.edu.iss.demo.model.ApplicationStatus;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDate;
import org.springframework.format.annotation.DateTimeFormat;

import jakarta.servlet.http.HttpSession;
import sg.edu.iss.demo.model.CourseApplication;
import sg.edu.iss.demo.model.Role;
import sg.edu.iss.demo.model.User;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/manager")
public class ManagerCourseController {

    private final CourseApplicationService courseApplicationService;
    private final CourseApplicationRepository courseApplicationRepository;

    public ManagerCourseController(
            CourseApplicationService courseApplicationService,
            CourseApplicationRepository courseApplicationRepository) {

        this.courseApplicationService = courseApplicationService;
        this.courseApplicationRepository = courseApplicationRepository;
    }
 // ==================== Manager Pending Applications ====================

    @GetMapping("/pending")
    public String pendingApplications(HttpSession session, Model model) {

        User manager = (User) session.getAttribute("loggedInUser");

        // Check whether user is logged in
        if (manager == null) {
            return "redirect:/login";
        }

        // Only managers can access this page
        if (manager.getRole() != Role.MANAGER) {
            return "redirect:/home";
        }

        // Get applications awaiting manager approval
        List<CourseApplication> applications =
                courseApplicationService.findPendingForManager(
                        manager.getId());

        model.addAttribute("applications", applications);
        model.addAttribute("manager", manager);

        return "manager/pending";
    }
    
 // ==================== Manager Application Detail ====================

    @GetMapping("/applications/{id}")
    public String applicationDetail(
            @PathVariable Long id,
            HttpSession session,
            Model model) {

        User manager = (User) session.getAttribute("loggedInUser");

        if (manager == null) {
            return "redirect:/login";
        }

        if (manager.getRole() != Role.MANAGER) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        CourseApplication application =
                courseApplicationService.findById(id);

        if (application == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        // Manager can only view applications from their own employees
        if (application.getApplicant() == null
                || application.getApplicant().getManager() == null
                || !application.getApplicant().getManager().getId()
                        .equals(manager.getId())) {

            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        // NOTE: model key must NOT be "application" — that name is shadowed by
        // Thymeleaf's built-in 'application' variable (ServletContext attribute
        // map), which made every ${application.*} expression in the detail
        // template resolve against the wrong object (blank fields / 500 errors).
        model.addAttribute("app", application);
        model.addAttribute("manager", manager);

        return "manager/detail";
    }
 // ==================== Manager Approve Application ====================

    @PostMapping("/applications/{id}/approve")
    public String approveApplication(
            @PathVariable Long id,
            @RequestParam("comment") String comment,
            HttpSession session,
            RedirectAttributes redirectAttributes) {

        User manager = (User) session.getAttribute("loggedInUser");

        // Check login
        if (manager == null) {
            return "redirect:/login";
        }

        // Only managers can approve applications
        if (manager.getRole() != Role.MANAGER) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        // Check whether the comment is empty
        if (comment == null || comment.trim().isEmpty()) {
            redirectAttributes.addFlashAttribute(
                    "error", "Manager comment is required.");

            return "redirect:/manager/applications/" + id;
        }

        // Call CourseApplicationService to approve
        courseApplicationService.approve(
                id,
                manager.getId(),
                comment.trim());

        redirectAttributes.addFlashAttribute(
                "success", "Course application approved successfully.");

        return "redirect:/manager/pending";
    }

    
 // ==================== Manager Reject Application ====================

    @PostMapping("/applications/{id}/reject")
    public String rejectApplication(
            @PathVariable Long id,
            @RequestParam("comment") String comment,
            HttpSession session,
            RedirectAttributes redirectAttributes) {

        User manager = (User) session.getAttribute("loggedInUser");

        // Check login
        if (manager == null) {
            return "redirect:/login";
        }

        // Only managers can reject applications
        if (manager.getRole() != Role.MANAGER) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        // Manager comment is mandatory
        if (comment == null || comment.trim().isEmpty()) {
            redirectAttributes.addFlashAttribute(
                    "error", "Manager comment is required.");

            return "redirect:/manager/applications/" + id;
        }

        // Call CourseApplicationService to reject
        courseApplicationService.reject(
                id,
                manager.getId(),
                comment.trim());

        redirectAttributes.addFlashAttribute(
                "success", "Course application rejected successfully.");

        return "redirect:/manager/pending";
    }
 // ==================== Approved Overlapping Courses ====================

    @GetMapping("/approved-overlapping")
    public String approvedOverlappingCourses(
            @RequestParam("startDate")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate,
            HttpSession session,
            Model model) {

        User manager = (User) session.getAttribute("loggedInUser");

        if (manager == null) {
            return "redirect:/login";
        }

        if (manager.getRole() != Role.MANAGER) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        if (endDate.isBefore(startDate)) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "End date cannot be earlier than start date");
        }

        List<CourseApplication> applications =
                courseApplicationService.findApprovedOverlapping(startDate, endDate);

        model.addAttribute("applications", applications);
        model.addAttribute("startDate", startDate);
        model.addAttribute("endDate", endDate);
        model.addAttribute("manager", manager);

        return "manager/approved-overlapping";
   
   }
 // ==================== Subordinate Application History ====================

    @GetMapping("/history")
    public String subordinateHistory(HttpSession session, Model model) {

        User manager = (User) session.getAttribute("loggedInUser");

        if (manager == null) {
            return "redirect:/login";
        }

        if (manager.getRole() != Role.MANAGER) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        List<CourseApplication> applications =
                courseApplicationRepository.findByManagerIdAndStatusIn(
                        manager.getId(),
                        List.of(ApplicationStatus.values()),
                        Pageable.unpaged());

        model.addAttribute("applications", applications);
        model.addAttribute("manager", manager);

        return "manager/history";
    }
    
    
}