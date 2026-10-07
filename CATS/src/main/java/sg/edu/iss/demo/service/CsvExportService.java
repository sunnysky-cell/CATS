package sg.edu.iss.demo.service;

import java.io.ByteArrayOutputStream;
import java.io.PrintWriter;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import sg.edu.iss.demo.model.CourseApplication;

@Service
public class CsvExportService {

	public byte[] exportAttendanceReport(List<CourseApplication> rows) {

		ByteArrayOutputStream out = new ByteArrayOutputStream();

		PrintWriter pw = new PrintWriter(out);

		pw.write('\uFEFF');

		pw.println("Employee Name,Course Title,Category,Training Provider,Start Date,End Date,Training Days,Status");

		for (CourseApplication r : rows) {

			pw.println(csv(r.getApplicant() != null ? r.getApplicant().getName() : "") + "," + csv(r.getCourseTitle())
					+ "," + csv(r.getCategory() != null ? r.getCategory().getName() : "") + ","
					+ csv(r.getTrainingProvider()) + "," + r.getStartDate() + "," + r.getEndDate() + ","
					+ r.getTrainingDays() + "," + r.getStatus());
		}

		pw.flush();

		return out.toByteArray();
	}

	public byte[] exportBudgetReport(List<Map<String, Object>> rows) {

		ByteArrayOutputStream out = new ByteArrayOutputStream();

		PrintWriter pw = new PrintWriter(out);

		pw.write('\uFEFF');

		pw.println(
				"Employee Name,Designation,Entitled Days,Days Used,Annual Budget,Approved Course Fees,Claimed Amounts,Remaining Budget");

		for (Map<String, Object> r : rows) {

			pw.println(csv(String.valueOf(r.get("employeeName"))) + "," + csv(String.valueOf(r.get("designation")))
					+ "," + r.get("entitledDays") + "," + r.get("daysUsed") + "," + r.get("annualBudget") + ","
					+ r.get("approvedCourseFees") + "," + r.get("claimedAmounts") + "," + r.get("remainingBudget"));
		}

		pw.flush();

		return out.toByteArray();
	}

	private String csv(String value) {

		if (value == null || value.equals("null")) {
			return "";
		}

		if (value.contains(",") || value.contains("\"") || value.contains("\n")) {
			return "\"" + value.replace("\"", "\"\"") + "\"";
		}

		return value;
	}
}
