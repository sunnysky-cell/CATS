package sg.edu.iss.demo.dto;
import java.time.LocalDate;
public final class CalendarCourseView {
	private final Long applicationId;
	private final String employeeName;
	private final String courseTtitle;
	private final String categoryName;
	private final String trainingProvider;
	private final LocalDate startDate;
	private final LocalDate endDate;
	public CalendarCourseView(Long applicationId, String employeeName, String courseTtitle, String categoryName,
			String trainingProvider, LocalDate startDate, LocalDate endDate) {
		super();
		this.applicationId = applicationId;
		this.employeeName = employeeName;
		this.courseTtitle = courseTtitle;
		this.categoryName = categoryName;
		this.trainingProvider = trainingProvider;
		this.startDate = startDate;
		this.endDate = endDate;
	}
	public Long getApplicationId() {
		return applicationId;
	}
	public String getEmployeeName() {
		return employeeName;
	}
	public String getCourseTtitle() {
		return courseTtitle;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public String getTrainingProvider() {
		return trainingProvider;
	}
	public LocalDate getStartDate() {
		return startDate;
	}
	public LocalDate getEndDate() {
		return endDate;
	}
	
	
	

}
