package sg.edu.iss.demo.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;
import sg.edu.iss.demo.model.CourseApplication;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.service.CsvExportService;
import sg.edu.iss.demo.service.ReportingService;

@Controller
@RequestMapping("/manager/report")
public class ReportingController {

	private final ReportingService reportingService;

	private final CsvExportService csvExportService;

	public ReportingController(ReportingService reportingService, CsvExportService csvExportService) {

		this.reportingService = reportingService;
		this.csvExportService = csvExportService;

	}

	@GetMapping
	public String showReportPage(HttpSession session) {

		User user = (User) session.getAttribute("loggedInUser");

		if (user == null) {
			return "redirect:/login";
		}

		return "report-home";
	}

	@GetMapping("/attendance")
	public String showAttendanceForm(HttpSession session) {

		User user = (User) session.getAttribute("loggedInUser");

		if (user == null) {
			return "redirect:/login";
		}

		return "report-attendance";
	}

	@PostMapping("/attendance")
	public String generateAttendanceReport(
			@RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
			@RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate,
			Model model,
			HttpSession session) {

		User user = (User) session.getAttribute("loggedInUser");

		if (user == null) {
			return "redirect:/login";
		}

		List<CourseApplication> rows = reportingService.getAttendanceReport(startDate, endDate);

		model.addAttribute("rows", rows);
		model.addAttribute("startDate", startDate);
		model.addAttribute("endDate", endDate);

		return "report-attendance";
	}

	@GetMapping("/attendance/export")
	public ResponseEntity<byte[]> exportAttendanceReportCsv(
			@RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
			@RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate,
			HttpSession session) {

		User user = (User) session.getAttribute("loggedInUser");

		if (user == null) {
			return ResponseEntity.status(302).header("Location", "/login").build();
		}

		List<CourseApplication> rows = reportingService.getAttendanceReport(startDate, endDate);

		byte[] csv = csvExportService.exportAttendanceReport(rows);

		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"attendance-report.csv\"")
				.contentType(MediaType.parseMediaType("text/csv; charset=UTF-8"))
				.body(csv);
	}

	// ========== 预算报表 ==========

	@GetMapping("/budget")
	public String showBudgetForm(HttpSession session) {

		User user = (User) session.getAttribute("loggedInUser");

		if (user == null) {
			return "redirect:/login";
		}

		return "report-budget";
	}

	@PostMapping("/budget")
	public String generateBudgetReport(
			@RequestParam Integer year,
			Model model,
			HttpSession session) {

		User user = (User) session.getAttribute("loggedInUser");

		if (user == null) {
			return "redirect:/login";
		}

		List<Map<String, Object>> rows = reportingService.getBudgetUtilisationReport(year);

		model.addAttribute("rows", rows);
		model.addAttribute("year", year);

		return "report-budget";
	}
}
