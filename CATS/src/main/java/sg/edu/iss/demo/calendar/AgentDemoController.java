package sg.edu.iss.demo.calendar;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;
import sg.edu.iss.demo.model.Role;
import sg.edu.iss.demo.model.User;

@Controller
public class AgentDemoController {

	@GetMapping("/agent-demo")
	public String agentDemo(HttpSession session, Model model) {

		Object attr = session.getAttribute("loggedInUser");

		if (!(attr instanceof User user) || user.getId() == null || user.getRole() == null) {
			return "redirect:/login";
		}

		model.addAttribute("user", user);
		model.addAttribute("manager", user.getRole() == Role.MANAGER);
		model.addAttribute("admin", user.getRole() == Role.ADMIN);

		return "agent-demo";
	}
}
