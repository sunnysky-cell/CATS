package sg.edu.iss.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;
import sg.edu.iss.demo.model.Role;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.service.AuthService;

@Controller
public class LoginController {
	
	private final AuthService authService;
	
	public LoginController(AuthService authService) {
		
		this.authService = authService;
		
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
		
		if(u.getRole() == Role.ADMIN) {
			
			return "redirect:/admin/home";
			
		}
		
		if(u.getRole() == Role.EMPLOYEE) {
			
			return "redirect:/employee/home";
			
		}
		
		return "redirect:/manager/pending";
		
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		
		session.invalidate();
		
		return "redirect:/login";
		
	}

}
