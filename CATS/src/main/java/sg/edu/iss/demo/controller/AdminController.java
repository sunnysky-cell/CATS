package sg.edu.iss.demo.controller;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;
import sg.edu.iss.demo.model.Role;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.service.AdminCatalogService;
import sg.edu.iss.demo.service.UserService;

@Controller
@RequestMapping("/admin")
public class AdminController {

    private final UserService userService;
    private final AdminCatalogService catalogService;

    public AdminController(
            UserService userService,
            AdminCatalogService catalogService) {

        this.userService = userService;
        this.catalogService = catalogService;
    }


// Admin Home
    @GetMapping("/home")
    public String home(
            HttpSession session,
            Model model) {

    	 User admin = requireAdmin(session);

	    if (admin == null) {
    	        return "redirect:/admin/login";
    	    }


        model.addAttribute("me", admin);
        model.addAttribute(
                "userCount",userService.findAll().size());

        model.addAttribute(
                "categoryCount",catalogService.findAllCategories().size());

        return "admin/home";
    }


// User Management
    @GetMapping("/users")
    public String userList(
            HttpSession session,
            Model model) {

        if (requireAdmin(session) == null) {
            return "redirect:/admin/login";
        }

        model.addAttribute(
                "users",
                userService.findAll());

        return "admin/users";
    }

    @GetMapping("/users/new")
    public String newUserForm(
            HttpSession session,
            Model model) {

    	if (requireAdmin(session) == null) {
    	        return "redirect:/admin/login";
    	    }
        model.addAttribute("user",new User());
        model.addAttribute("managers",userService.findManagers());
        model.addAttribute("roles",Role.values());

        return "admin/user-form";
    }

    @PostMapping("/users/new")
    public String createUser(
            @RequestParam String username,
            @RequestParam String password,
            @RequestParam String name,
            @RequestParam(required = false)
            String email,
            @RequestParam String designation,
            @RequestParam(required = false)
            Role role,
            @RequestParam(required = false)
            Long managerId,
            HttpSession session,
            Model model) {

        if (requireAdmin(session) == null) {
            return "redirect:/admin/login";
        }

        User user = new User();

        user.setUsername(username);
        user.setPassword(password);
        user.setName(name);
        user.setEmail(email);
        user.setDesignation(designation);

        user.setRole(
                role == null
                        ? Role.EMPLOYEE
                        : role);

        try {
        userService.create(user,managerId);
        }catch (IllegalArgumentException e) {

            // ADMIN MODULE:
            // Business/input errors return to the original form.
            model.addAttribute(
                    "error",
                    e.getMessage());

            model.addAttribute(
                    "user",
                    user);

            model.addAttribute(
                    "managers",
                    userService.findManagers());

            model.addAttribute(
                    "roles",
                    Role.values());

            return "admin/user-form";
        }

        return "redirect:/admin/users";
    }

    @GetMapping("/users/{id}/edit")
    public String editUserForm(
            @PathVariable Long id,
            HttpSession session,
            Model model) {

        if (requireAdmin(session) == null) {
            return "redirect:/admin/login";
        }

        try {

            User user = userService.findById(id);

            model.addAttribute("user",user);

            model.addAttribute("managers",userService.findManagers());

            model.addAttribute("roles", Role.values());

            model.addAttribute("entitlements", userService.findEntitlements(id));

        } catch (IllegalArgumentException e) {

            model.addAttribute("error",e.getMessage());

            model.addAttribute("users",userService.findAll());

            return "admin/users";
        }

        return "admin/user-form";
    }

    @PostMapping("/users/{id}/edit")
    public String editUser(
            @PathVariable Long id,
            @RequestParam String name,
            @RequestParam(required = false)
            String email,
            @RequestParam String designation,
            @RequestParam(required = false)
            Long managerId,
            HttpSession session,
            Model model) {

        if (requireAdmin(session) == null) {
            return "redirect:/admin/login";
        }

        try {

            userService.updateProfile(
                    id,
                    name,
                    email,
                    designation,
                    managerId);

        } catch (IllegalArgumentException e) {

            User user =
                    userService.findById(id);

            model.addAttribute("error",e.getMessage());

            model.addAttribute("user",user);

            model.addAttribute("managers",userService.findManagers());

            model.addAttribute("roles",Role.values());

            model.addAttribute("entitlements",userService.findEntitlements(id));

            return "admin/user-form";
        }

        return "redirect:/admin/users";
    }

    @PostMapping("/users/{id}/role")
    public String changeRole(
            @PathVariable Long id,
            @RequestParam Role role,
            HttpSession session) {


        if (requireAdmin(session) == null) {
            return "redirect:/admin/login";
        }

        userService.changeRole(id,role);

        return "redirect:/admin/users";
    }

    @PostMapping("/users/{id}/toggle")
    public String toggleEnabled(
            @PathVariable Long id,
            HttpSession session) {

        if (requireAdmin(session) == null) {
            return "redirect:/admin/login";
        }

        userService.toggleEnabled(id);

        return "redirect:/admin/users";
    }


// Training Entitlement
    @PostMapping("/users/{id}/entitlement")
    public String saveEntitlement(
            @PathVariable Long id,
            @RequestParam Integer year,
            @RequestParam BigDecimal entitledDays,
            @RequestParam BigDecimal annualBudget,
            HttpSession session,
            Model model) {

    	if (requireAdmin(session) == null) {
            return "redirect:/admin/login";
        }

        try {

            userService.saveEntitlement(
                    id,
                    year,
                    entitledDays,
                    annualBudget);

        } catch (IllegalArgumentException e) {

            User user =
                    userService.findById(id);

            model.addAttribute("error",e.getMessage());

            model.addAttribute("user",user);

            model.addAttribute("managers",userService.findManagers());

            model.addAttribute("roles",Role.values());

            model.addAttribute("entitlements",userService.findEntitlements(id));

            return "admin/user-form";
        }

        return "redirect:/admin/users/" + id + "/edit";
    }


// Course Category
    @GetMapping("/categories")
    public String categories(
            HttpSession session,
            Model model) {

        if (requireAdmin(session) == null) {
            return "redirect:/admin/login";
        }

        model.addAttribute("categories",catalogService.findAllCategories());

        return "admin/categories";
    }

    @PostMapping("/categories/new")
    public String createCategory(
            @RequestParam String name,
            @RequestParam(required = false)
            String description,
            @RequestParam(
                    defaultValue = "false")
            boolean feeRequired,
            @RequestParam(
                    defaultValue = "false")
            boolean allowHalfDay,
            HttpSession session,
            Model model) {


        if (requireAdmin(session) == null) {
            return "redirect:/admin/login";
        }

        try {

            catalogService.createCategory(
                    name,
                    description,
                    feeRequired,
                    allowHalfDay);

        } catch (IllegalArgumentException e) {

            model.addAttribute("error",e.getMessage());

            model.addAttribute("categories",catalogService
                        .findAllCategories());

            return "admin/categories";
        }

        return "redirect:/admin/categories";
    }
    
    @PostMapping("/categories/{id}/edit")
    public String updateCategory(
            @PathVariable Long id,
            @RequestParam String name,
            @RequestParam(required = false)
            String description,
            @RequestParam(
                    required = false,
                    defaultValue = "false")
            boolean feeRequired,
            @RequestParam(
                    required = false,
                    defaultValue = "false")
            boolean allowHalfDay,
            HttpSession session,
            Model model) {

        if (requireAdmin(session) == null) {
            return "redirect:/admin/login";
        }

        try {

            catalogService.updateCategory(
                    id,
                    name,
                    description,
                    feeRequired,
                    allowHalfDay);

        } catch (IllegalArgumentException e) {

            model.addAttribute(
                    "error",
                    e.getMessage());

            model.addAttribute(
                    "categories",
                    catalogService.findAllCategories());

            return "admin/categories";
        }

        return "redirect:/admin/categories";
    }
    
    @PostMapping("/categories/{id}/toggle")
    public String toggleCategory(
            @PathVariable Long id,
            HttpSession session) {

        if (requireAdmin(session) == null) {
            return "redirect:/admin/login";
        }

        catalogService.toggleCategoryActive(id);

        return "redirect:/admin/categories";
    }

// Public Holiday
    @GetMapping("/holidays")
    public String holidays(
            @RequestParam(required = false)
            Integer year,
            HttpSession session,
            Model model) {

        if (requireAdmin(session) == null) {
            return "redirect:/admin/login";
        }

        int selectedYear =
                year == null
                        ? LocalDate.now().getYear()
                        : year;

        model.addAttribute("holidays",catalogService
                        .findHolidaysOfYear(selectedYear));

        model.addAttribute("year",selectedYear);

        return "admin/holidays";
    }
    
    @PostMapping("/holidays/new")
    public String createHoliday(
            @RequestParam String holidayDate,
            @RequestParam String description,
            HttpSession session,
            Model model) {

        if (requireAdmin(session) == null) {
            return "redirect:/admin/login";
        }
        
    	LocalDate date;

        try {

            date = LocalDate.parse(holidayDate);

            catalogService.createHoliday(date, description);

        } catch (IllegalArgumentException e) {

            model.addAttribute("error",e.getMessage());

            int selectedYear;

            try {
                selectedYear =
                        LocalDate.parse(holidayDate)
                                .getYear();
            } catch (Exception ignored) {
                selectedYear =
                        LocalDate.now().getYear();
            }

            model.addAttribute("holidays",catalogService.findHolidaysOfYear(selectedYear));

            model.addAttribute("year",selectedYear);

            return "admin/holidays";
        }

        return "redirect:/admin/holidays?year=" + date.getYear();
    }
    
    @PostMapping("/holidays/{id}/delete")
    public String deleteHoliday(
            @PathVariable Long id,
            @RequestParam(required = false)
            Integer year,
            HttpSession session) {

        if (requireAdmin(session) == null) {
            return "redirect:/admin/login";
        }

        catalogService.deleteHoliday(id);

        if (year != null) {
            return "redirect:/admin/holidays?year=" + year;
        }

        return "redirect:/admin/holidays";
    }

// Admin Authorization
    private User requireAdmin(HttpSession session) {

        User user =
                (User) session.getAttribute("loggedInUser");

        if (user == null || user.getRole() != Role.ADMIN) {

            return null;
        }

        return user;
    }
}
