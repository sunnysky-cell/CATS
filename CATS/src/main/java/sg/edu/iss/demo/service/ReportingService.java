package sg.edu.iss.demo.service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import sg.edu.iss.demo.model.ApplicationStatus;
import sg.edu.iss.demo.model.ClaimStatus;
import sg.edu.iss.demo.model.CourseApplication;
import sg.edu.iss.demo.model.CourseFeeClaim;
import sg.edu.iss.demo.model.TrainingEntitlement;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.repo.CourseApplicationRepository;
import sg.edu.iss.demo.repo.CourseFeeClaimRepository;
import sg.edu.iss.demo.repo.TrainingEntitlementRepository;
import sg.edu.iss.demo.repo.UserRepository;

@Service
public class ReportingService {

	private final CourseApplicationRepository courseAppRepo;

	private final CourseFeeClaimRepository claimRepo;

	private final TrainingEntitlementRepository entitlementRepo;

	private final UserRepository userRepo;

	public ReportingService(CourseApplicationRepository courseAppRepo, CourseFeeClaimRepository claimRepo,
			TrainingEntitlementRepository entitlementRepo, UserRepository userRepo) {

		this.courseAppRepo = courseAppRepo;
		this.claimRepo = claimRepo;
		this.entitlementRepo = entitlementRepo;
		this.userRepo = userRepo;

	}

	public List<CourseApplication> getAttendanceReport(LocalDate startDate, LocalDate endDate) {

		List<CourseApplication> apps = courseAppRepo.findAll();

		List<CourseApplication> result = new ArrayList<>();

		for (CourseApplication ca : apps) {

			if (ca.getStatus() != ApplicationStatus.APPROVED && ca.getStatus() != ApplicationStatus.COMPLETED) {
				continue;
			}

			if (startDate != null && ca.getEndDate().isBefore(startDate)) {
				continue;
			}

			if (endDate != null && ca.getStartDate().isAfter(endDate)) {
				continue;
			}

			result.add(ca);
		}

		return result;
	}

	public List<Map<String, Object>> getBudgetUtilisationReport(Integer year) {

		List<User> allUsers = userRepo.findAll();

		List<Map<String, Object>> rows = new ArrayList<>();

		for (User emp : allUsers) {

			BigDecimal entitledDays = BigDecimal.ZERO;
			BigDecimal annualBudget = BigDecimal.ZERO;

			Optional<TrainingEntitlement> entOpt = entitlementRepo.findByUserIdAndYear(emp.getId(), year);

			if (entOpt.isPresent()) {
				entitledDays = entOpt.get().getEntitledDays();
				annualBudget = entOpt.get().getAnnualBudget();
			}

			List<CourseApplication> apps = courseAppRepo.findByApplicantIdAndYear(emp.getId(), year,
					Pageable.unpaged());

			BigDecimal daysUsed = BigDecimal.ZERO;
			BigDecimal approvedCourseFees = BigDecimal.ZERO;

			for (CourseApplication ca : apps) {
				if (ca.getStatus() == ApplicationStatus.APPROVED || ca.getStatus() == ApplicationStatus.COMPLETED) {

					if (ca.getTrainingDays() != null) {
						daysUsed = daysUsed.add(ca.getTrainingDays());
					}

					if (ca.getCourseFee() != null) {
						approvedCourseFees = approvedCourseFees.add(ca.getCourseFee());
					}
				}
			}

			List<CourseFeeClaim> claims = claimRepo.findByClaimant_Id(emp.getId());

			BigDecimal claimedAmounts = BigDecimal.ZERO;

			for (CourseFeeClaim c : claims) {
				if (c.getStatus() == ClaimStatus.APPROVED && c.getDecisionDate() != null) {
					if (c.getDecisionDate().getYear() == year) {
						claimedAmounts = claimedAmounts.add(c.getClaimAmount());
					}
				}
			}

			BigDecimal remainingBudget = annualBudget.subtract(approvedCourseFees);

			Map<String, Object> row = new HashMap<>();

			row.put("employeeName", emp.getName());
			row.put("designation", emp.getDesignation());
			row.put("entitledDays", entitledDays);
			row.put("daysUsed", daysUsed);
			row.put("annualBudget", annualBudget);
			row.put("approvedCourseFees", approvedCourseFees);
			row.put("claimedAmounts", claimedAmounts);
			row.put("remainingBudget", remainingBudget);

			rows.add(row);
		}

		return rows;
	}
}
