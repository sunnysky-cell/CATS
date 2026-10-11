package sg.edu.iss.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import sg.edu.iss.demo.service.CourseApplicationService;
import sg.edu.iss.demo.service.CourseFeeClaimService;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

import sg.edu.iss.demo.repo.CourseApplicationRepository;

import org.springframework.data.domain.Pageable;
import sg.edu.iss.demo.model.ApplicationStatus;
import sg.edu.iss.demo.model.CourseFeeClaim;

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
    private final CourseFeeClaimService courseFeeClaimService;

    public ManagerCourseController(
            CourseApplicationService courseApplicationService,
            CourseApplicationRepository courseApplicationRepository,
            CourseFeeClaimService courseFeeClaimService) {

        this.courseApplicationService = courseApplicationService;
        this.courseApplicationRepository = courseApplicationRepository;
        this.courseFeeClaimService = courseFeeClaimService;
    }

    @GetMapping("/pending")
    public String pendingApplications(HttpSession session, Model model) {

        User manager = (User) session.getAttribute("loggedInUser");

        if (manager == null) {
            return "redirect:/login";
        }

        if (manager.getRole() != Role.MANAGER) {
            return "redirect:/home";
        }

        List<CourseApplication> applications =
                courseApplicationService.findPendingForManager(
                        manager.getId());

        model.addAttribute("applications", applications);
        model.addAttribute("manager", manager);

        LinkedHashMap<String, List<CourseApplication>> grouped = new LinkedHashMap<>();

        for (CourseApplication a : applications) {

            String name = "No employee name";

            if (a.getApplicant() != null && a.getApplicant().getName() != null) {
                name = a.getApplicant().getName();
            }

            List<CourseApplication> one = grouped.get(name);

            if (one == null) {
                one = new ArrayList<>();
                grouped.put(name, one);
            }

            one.add(a);
        }

        model.addAttribute("grouped", grouped);

        return "manager/pending";
    }
    
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

        if (application.getApplicant() == null
                || application.getApplicant().getManager() == null
                || !application.getApplicant().getManager().getId()
                        .equals(manager.getId())) {

            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        // "application" is a Thymeleaf built-in variable, so the model key is "app"
        model.addAttribute("app", application);
        model.addAttribute("manager", manager);

        int usageYear = LocalDate.now().getYear();

        if (application.getStartDate() != null) {
            usageYear = application.getStartDate().getYear();
        }

        if (application.getApplicant() != null) {
            model.addAttribute("usageSummary",
                    courseApplicationService.Summary(
                            application.getApplicant().getId(), usageYear));
            model.addAttribute("usageYear", usageYear);
        }

        return "manager/detail";
    }

    @PostMapping("/applications/{id}/approve")
    public String approveApplication(
            @PathVariable Long id,
            @RequestParam("comment") String comment,
            HttpSession session,
            RedirectAttributes redirectAttributes) {

        User manager = (User) session.getAttribute("loggedInUser");

        if (manager == null) {
            return "redirect:/login";
        }

        if (manager.getRole() != Role.MANAGER) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        if (comment == null || comment.trim().isEmpty()) {
            redirectAttributes.addFlashAttribute(
                    "error", "Manager comment is required.");

            return "redirect:/manager/applications/" + id;
        }

        courseApplicationService.approve(
                id,
                manager.getId(),
                comment.trim());

        redirectAttributes.addFlashAttribute(
                "success", "Course application approved successfully.");

        return "redirect:/manager/pending";
    }

    
    @PostMapping("/applications/{id}/reject")
    public String rejectApplication(
            @PathVariable Long id,
            @RequestParam("comment") String comment,
            HttpSession session,
            RedirectAttributes redirectAttributes) {

        User manager = (User) session.getAttribute("loggedInUser");

        if (manager == null) {
            return "redirect:/login";
        }

        if (manager.getRole() != Role.MANAGER) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        if (comment == null || comment.trim().isEmpty()) {
            redirectAttributes.addFlashAttribute(
                    "error", "Manager comment is required.");

            return "redirect:/manager/applications/" + id;
        }

        courseApplicationService.reject(
                id,
                manager.getId(),
                comment.trim());

        redirectAttributes.addFlashAttribute(
                "success", "Course application rejected successfully.");

        return "redirect:/manager/pending";
    }

    @GetMapping("/approved-overlapping")
    public String approvedOverlappingCourses(
            @RequestParam("startDate")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate,
            @RequestParam(value = "excludeApplicant", required = false) Long excludeApplicant,
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

        Long excludeId = -1L;

        if (excludeApplicant != null) {
            excludeId = excludeApplicant;
        }

        List<CourseApplication> applications =
                courseApplicationService.findApprovedOverlapping(
                        manager.getId(), excludeId, startDate, endDate);

        model.addAttribute("applications", applications);
        model.addAttribute("startDate", startDate);
        model.addAttribute("endDate", endDate);
        model.addAttribute("manager", manager);

        return "manager/approved-overlapping";
   
   }

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

    @GetMapping("/claims")
    public String pendingClaims(HttpSession session, Model model) {

        User manager = (User) session.getAttribute("loggedInUser");

        if (manager == null) {
            return "redirect:/login";
        }

        if (manager.getRole() != Role.MANAGER) {
            return "redirect:/home";
        }

        List<CourseFeeClaim> claims =
                courseFeeClaimService.findClaimForManager(manager.getId());

        model.addAttribute("claims", claims);
        model.addAttribute("manager", manager);

        return "manager/claims";
    }

    @GetMapping("/claims/{id}")
    public String claimDetail(@PathVariable Long id, HttpSession session, Model model) {

        User manager = (User) session.getAttribute("loggedInUser");

        if (manager == null) {
            return "redirect:/login";
        }

        if (manager.getRole() != Role.MANAGER) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        CourseFeeClaim claim = courseFeeClaimService.findById(id);

        if (claim == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        model.addAttribute("claim", claim);
        model.addAttribute("manager", manager);

        return "manager/claim-detail";
    }

    @PostMapping("/claims/{id}/approve")
    public String approveClaim(
            @PathVariable Long id,
            @RequestParam("comment") String comment,
            HttpSession session,
            RedirectAttributes redirectAttributes) {

        User manager = (User) session.getAttribute("loggedInUser");

        if (manager == null) {
            return "redirect:/login";
        }

        if (manager.getRole() != Role.MANAGER) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        try {
            courseFeeClaimService.approve(id, comment, manager.getId());
            redirectAttributes.addFlashAttribute("success", "Fee claim approved.");
        } catch (RuntimeException ex) {
            redirectAttributes.addFlashAttribute("error", ex.getMessage());
            return "redirect:/manager/claims/" + id;
        }

        return "redirect:/manager/claims";
    }

    @PostMapping("/claims/{id}/reject")
    public String rejectClaim(
            @PathVariable Long id,
            @RequestParam("comment") String comment,
            HttpSession session,
            RedirectAttributes redirectAttributes) {

        User manager = (User) session.getAttribute("loggedInUser");

        if (manager == null) {
            return "redirect:/login";
        }

        if (manager.getRole() != Role.MANAGER) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        try {
            courseFeeClaimService.reject(id, comment, manager.getId());
            redirectAttributes.addFlashAttribute("success", "Fee claim rejected.");
        } catch (RuntimeException ex) {
            redirectAttributes.addFlashAttribute("error", ex.getMessage());
            return "redirect:/manager/claims/" + id;
        }

        return "redirect:/manager/claims";
    }


}