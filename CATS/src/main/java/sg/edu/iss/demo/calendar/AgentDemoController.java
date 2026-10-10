package sg.edu.iss.demo.calendar;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import sg.edu.iss.demo.model.Role;
import sg.edu.iss.demo.model.User;

/** Authenticated demonstration page only; it adds no agent approval or business-write API. */
@Controller
public class AgentDemoController {
    @GetMapping("/agent-demo")
    public String agentDemo(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession(false);
        Object attribute = session == null ? null : session.getAttribute("loggedInUser");
        if (!(attribute instanceof User user) || user.getId() == null || user.getRole() == null)
            return "redirect:/login";
        model.addAttribute("user", user);
        model.addAttribute("manager", user.getRole() == Role.MANAGER);
        model.addAttribute("admin", user.getRole() == Role.ADMIN);
        return "agent-demo";
    }
}
