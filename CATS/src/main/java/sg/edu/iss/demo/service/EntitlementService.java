package sg.edu.iss.demo.service;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sg.edu.iss.demo.model.ApplicationStatus;
import sg.edu.iss.demo.model.CourseApplication;
import sg.edu.iss.demo.model.TrainingEntitlement;
import sg.edu.iss.demo.repo.CourseApplicationRepository;
import sg.edu.iss.demo.repo.TrainingEntitlementRepository;

@Service
public class EntitlementService {

	private final TrainingEntitlementRepository entitlementRepo;
	private final CourseApplicationRepository appRepo;

	public EntitlementService(
			TrainingEntitlementRepository entitlementRepo,
			CourseApplicationRepository appRepo) {

		this.entitlementRepo = entitlementRepo;
		this.appRepo = appRepo;
	}

	@Transactional(readOnly = true)
	public TrainingEntitlement findEntitlement(Long userId, int year) {

		return entitlementRepo
				.findByUserIdAndYear(userId, year)
				.orElse(null);
	}

	@Transactional(readOnly = true)
	public List<CourseApplication> findActiveApplications(
			Long userId,
			int year) {

		List<ApplicationStatus> statuses = List.of(
				ApplicationStatus.APPLIED,
				ApplicationStatus.UPDATED,
				ApplicationStatus.APPROVED,
				ApplicationStatus.COMPLETED);

		return appRepo.findActiveByUserAndYear(
				userId,
				year,
				statuses);
	}

	@Transactional(readOnly = true)
	public BigDecimal calculateUsedDays(
			Long userId,
			int year,
			Long excludeId) {

		BigDecimal usedDays = BigDecimal.ZERO;

		for (CourseApplication application :
				findActiveApplications(userId, year)) {

			if (excludeId != null
					&& application.getId().equals(excludeId)) {
				continue;
			}

			if (application.getTrainingDays() != null) {
				usedDays =
						usedDays.add(application.getTrainingDays());
			}
		}

		return usedDays;
	}

	@Transactional(readOnly = true)
	public BigDecimal calculateUsedBudget(
			Long userId,
			int year,
			Long excludeId) {

		BigDecimal usedBudget = BigDecimal.ZERO;

		for (CourseApplication application :
				findActiveApplications(userId, year)) {

			if (excludeId != null
					&& application.getId().equals(excludeId)) {
				continue;
			}

			if (application.getCourseFee() != null) {
				usedBudget =
						usedBudget.add(application.getCourseFee());
			}
		}

		return usedBudget;
	}

	@Transactional(readOnly = true)
	public boolean hasEnoughTrainingDays(
			Long userId,
			int year,
			BigDecimal requiredDays,
			Long excludeId) {

		TrainingEntitlement entitlement =
				findEntitlement(userId, year);

		if (entitlement == null) {
			return false;
		}

		BigDecimal usedDays =
				calculateUsedDays(userId, year, excludeId);

		return usedDays
				.add(requiredDays)
				.compareTo(entitlement.getEntitledDays()) <= 0;
	}

	@Transactional(readOnly = true)
	public boolean hasEnoughBudget(
			Long userId,
			int year,
			BigDecimal requiredFee,
			Long excludeId) {

		TrainingEntitlement entitlement =
				findEntitlement(userId, year);

		if (entitlement == null) {
			return false;
		}

		BigDecimal usedBudget =
				calculateUsedBudget(userId, year, excludeId);

		return usedBudget
				.add(requiredFee)
				.compareTo(entitlement.getAnnualBudget()) <= 0;
	}

	@Transactional(readOnly = true)
	public String usageSummary(Long userId, int year) {

		TrainingEntitlement entitlement =
				findEntitlement(userId, year);

		if (entitlement == null) {
			return "Entitlement not configured for " + year;
		}

		BigDecimal usedDays =
				calculateUsedDays(userId, year, null);

		BigDecimal usedBudget =
				calculateUsedBudget(userId, year, null);

		return "Days: "
				+ usedDays
				+ " / "
				+ entitlement.getEntitledDays()
				+ "    Budget used: "
				+ usedBudget
				+ " / "
				+ entitlement.getAnnualBudget();
	}
}