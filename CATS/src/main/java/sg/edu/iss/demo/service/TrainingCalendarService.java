package sg.edu.iss.demo.service;

import java.time.YearMonth;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sg.edu.iss.demo.dto.*;
import sg.edu.iss.demo.model.ApplicationStatus;
import sg.edu.iss.demo.repo.CourseApplicationRepository;

@Service
public class TrainingCalendarService {
	public static final int MIN_YEAR = 1000;
	public static final int MAX_YEAR = 9999;
	
	private final CourseApplicationRepository courseApplicationRepository;

	public TrainingCalendarService(CourseApplicationRepository courseApplicationRepository) {
		this.courseApplicationRepository = courseApplicationRepository;
	}
	
	public YearMonth validateMonth(Integer year, Integer month) {
		if(year == null || year < MIN_YEAR || year > MAX_YEAR) {
			throw new IllegalArgumentException("Year must be between 1000 and 9999.");
		}
		if(month == null || month < 1 || month > 12) {
			throw new IllegalArgumentException("Month must be between 1 and 12.");
		}
		return YearMonth.of(year, month);
	}
	
	@Transactional(readOnly = true)
	public List<CalendarCourseView> getMonthlyApprovedCourses(Integer year, Integer month){
		YearMonth selectedMonth = validateMonth(year, month);
		
		return courseApplicationRepository.findCalendarApplications(ApplicationStatus.APPROVED
				, selectedMonth.atDay(1),
				selectedMonth.atEndOfMonth())
				.stream()
				.map(application -> new CalendarCourseView(
						application.getId(),
						application.getApplicant().getName(),
						application.getCourseTitle(),
						application.getCategory().getName(),
						application.getTrainingProvider(),
						application.getStartDate(),
						application.getEndDate()))
				.toList();
	}
	
	

}
