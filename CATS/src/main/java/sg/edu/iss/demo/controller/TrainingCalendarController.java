package sg.edu.iss.demo.controller;

import java.time.YearMonth;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.stream.IntStream;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.ModelAndView;

import jakarta.servlet.http.HttpSession;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.service.TrainingCalendarService;

@Controller
@RequestMapping("/training-calendar")
public class TrainingCalendarController {
	private static final ZoneId BUSINESS_ZONE = ZoneId.of("Asia/Singapore");
	private static final DateTimeFormatter MONTH_LABEL = DateTimeFormatter.ofPattern("MMMM uuuu", Locale.ENGLISH);
	private final TrainingCalendarService trainingCalendarService;
	public TrainingCalendarController(TrainingCalendarService trainingCalendarService) {
		this.trainingCalendarService = trainingCalendarService;
	}
	
	@GetMapping
	public String viewMonthlyCalendar(
			@RequestParam(name = "year", required = false) Integer year,
			@RequestParam(name = "month", required = false) Integer month,
			Model model,
			HttpSession session) {
		User user = (User) session.getAttribute("loggedInUser");
		if(user == null) {
			return "redirect:/login";
		}
		
		YearMonth currentMonth = YearMonth.now(BUSINESS_ZONE);
		int selectedYear =year == null ? currentMonth.getYear() : year;
		int selectedMonthNumber = month == null ? currentMonth.getMonthValue() : month;
		YearMonth selectedMonth = trainingCalendarService.validateMonth(selectedYear, selectedMonthNumber);
		YearMonth minimumMonth = YearMonth.of(TrainingCalendarService.MIN_YEAR, 1);
		YearMonth maximumMonth = YearMonth.of(TrainingCalendarService.MAX_YEAR, 12);
		YearMonth previousMonth = selectedMonth.isAfter(minimumMonth) ? selectedMonth.minusMonths(1) : null;
		YearMonth nextMonth = selectedMonth.isBefore(maximumMonth) ? selectedMonth.plusMonths(1) : null;
		
		int firstYear = Math.max(TrainingCalendarService.MIN_YEAR, selectedYear - 5);
		int lastYear = Math.min(TrainingCalendarService.MAX_YEAR, selectedYear + 5);
		
		model.addAttribute("year",selectedYear);
		model.addAttribute("month",selectedMonthNumber);
		model.addAttribute("monthLabel", selectedMonth.format(MONTH_LABEL));
		model.addAttribute("years", IntStream.rangeClosed(firstYear, lastYear).boxed().toList());
		model.addAttribute("previousMonth", previousMonth);
		model.addAttribute("nextMonth",nextMonth);
		model.addAttribute("rows", trainingCalendarService.getMonthlyApprovedCourses(selectedYear, selectedMonthNumber));
		
		return "training-calendar";
	}
	
	@ExceptionHandler(IllegalArgumentException.class)
	public ModelAndView handleInvalidMonth(IllegalArgumentException exception) {
		ModelAndView result = new ModelAndView("error");
		result.setStatus(HttpStatus.BAD_REQUEST);
		result.addObject("error",exception.getMessage());
		return result;
	}
	
	@ExceptionHandler(MethodArgumentTypeMismatchException.class)
	public ModelAndView handleInvalidParameter(MethodArgumentTypeMismatchException exception) {
	ModelAndView result = new ModelAndView("error");
	result.setStatus(HttpStatus.BAD_REQUEST);
	result.addObject("error","Year and month must be valid whole numbers.");
	return result;
	}

}
