package sg.edu.iss.demo.controller;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;
import sg.edu.iss.demo.model.Role;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.service.AuthService;
import sg.edu.iss.demo.service.EntitlementService;
import sg.edu.iss.demo.model.TrainingEntitlement;

@Controller
public class LoginController {
	
	private final AuthService authService;
	private final EntitlementService entitlementService;
	
	public LoginController(AuthService authService, EntitlementService entitlementService) {
		
		this.authService = authService;
		this.entitlementService = entitlementService;
		
	}
	
	@GetMapping("/login")
	public String login(Model model) {
		
		model.addAttribute("adminMode", false);
		
		return "login";
		
	}
	
	@GetMapping("/admin/login")
	public String adminLogin(Model model) {
		
		model.addAttribute("adminMode", true);
		
		return "login";
		
	}
		
	@GetMapping("/")
	public String originLogin() {
		
		return "redirect:/login";
		
	}
	
	@PostMapping("/login")
	public String dologin(@RequestParam  String username, @RequestParam String password, HttpSession session, Model model) {
		
		User u = authService.login(username, password); 
		
		if(u == null) {
			
			model.addAttribute("error", "The username or password you entered is incorrect.");
			
			return "login";
						
		}
		
		session.setAttribute("loggedInUser", u);
		return "redirect:/home";
		
	}
	
	@GetMapping("/home")
	public String home(HttpSession session, Model model) {
		User user = (User) session.getAttribute("loggedInUser");
		if(user == null) {
			return "redirect:/login";
		}
		model.addAttribute("user",user);
		model.addAttribute("manager",user.getRole() == Role.MANAGER);
		model.addAttribute("admin",user.getRole() == Role.ADMIN);
		if (user.getRole() != Role.ADMIN) {
			int year = LocalDate.now().getYear();
			model.addAttribute("entitlementYear", year);
			TrainingEntitlement entitlement = entitlementService.findEntitlement(user.getId(), year);
			model.addAttribute("annualEntitlement", entitlement);
			if (entitlement != null) {
				BigDecimal usedDays = entitlementService.calculateUsedDays(user.getId(), year, null);
				BigDecimal usedBudget = entitlementService.calculateUsedBudget(user.getId(), year, null);
				model.addAttribute("usedTrainingDays", usedDays);
				model.addAttribute("usedTrainingBudget", usedBudget);
				model.addAttribute("remainingTrainingDays", entitlement.getEntitledDays().subtract(usedDays));
				model.addAttribute("remainingTrainingBudget", entitlement.getAnnualBudget().subtract(usedBudget));
				model.addAttribute("daysRemainingPercent", remainingPercent(usedDays, entitlement.getEntitledDays()));
				model.addAttribute("budgetRemainingPercent", remainingPercent(usedBudget, entitlement.getAnnualBudget()));
			}
		}
		return "home";
	}

	private static BigDecimal remainingPercent(BigDecimal used, BigDecimal allocated) {
		if (allocated.signum() <= 0) return BigDecimal.ZERO;
		return allocated.subtract(used).multiply(BigDecimal.valueOf(100))
				.divide(allocated, 2, RoundingMode.HALF_UP)
				.max(BigDecimal.ZERO).min(BigDecimal.valueOf(100));
	}
	
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		
		session.invalidate();
		
		return "redirect:/login";
		
	}

}
