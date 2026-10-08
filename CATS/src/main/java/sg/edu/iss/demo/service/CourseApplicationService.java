package sg.edu.iss.demo.service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import sg.edu.iss.demo.model.ApplicationStatus;
import sg.edu.iss.demo.model.CourseApplication;
import sg.edu.iss.demo.model.CourseCategory;
import sg.edu.iss.demo.model.TrainingEntitlement;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.repo.CourseApplicationRepository;
import sg.edu.iss.demo.repo.UserRepository;

@Service
public class CourseApplicationService {

	private final NotificationService notificationService;
	
	private final CourseApplicationRepository CourseAppRepo;
	
	private final UserRepository UserRepo;
	
	// 复用队友的组件：算工作日/天数、算已用额度与预算
	private final TrainingDayCalculator dayCalculator;
	
	private final EntitlementService entitlementService;
	
	public CourseApplicationService(CourseApplicationRepository CourseAppRepo, UserRepository UserRepo,
			NotificationService notificationService, TrainingDayCalculator dayCalculator,
			EntitlementService entitlementService) {
		
		this.CourseAppRepo = CourseAppRepo;
		
		this.UserRepo = UserRepo;
		
		this.notificationService = notificationService;
		
		this.dayCalculator = dayCalculator;
		
		this.entitlementService = entitlementService;
		
	}

	public List<CourseApplication> findMyHistory(Long userId){
		
		int year = LocalDate.now().getYear();
		
		return CourseAppRepo.findByApplicantIdAndYear(userId, year, Pageable.unpaged());
		
	}

	public CourseApplication findById(Long id){
		
		return CourseAppRepo.findById(id).orElse(null);
		
	}

	public List<CourseApplication> findPendingForManager(Long managerId){
		
		List<ApplicationStatus> pending = new ArrayList<>();
		
		pending.add(ApplicationStatus.APPLIED);
		
		pending.add(ApplicationStatus.UPDATED);
		
		return CourseAppRepo.findByManagerIdAndStatusIn(managerId, pending, Pageable.unpaged());
		
	}

	public List<CourseApplication> findApprovedOverlapping(LocalDate start, LocalDate end){
		
		return CourseAppRepo.findApprovedOverlapping(start, end);
		
	}

	public List<String> validate(CourseApplication form, User nowUser, Long exId){
		
		List<String> error = new ArrayList<>(); 
		
		LocalDate start = form.getStartDate();
		
		LocalDate end = form.getEndDate();
		
		CourseCategory c = form.getCategory();
		
		// 规则1：结束日期不能早于开始日期
		if(start != null && end != null && end.isBefore(start)) {
			
			error.add("End date cannot be earlier than start date");
			
		}
		
		// 规则2：开始日期必须是工作日
		if(start != null && !dayCalculator.isWorkingDay(start)) {
			
			error.add("Start date " + start + " is not a working day (weekend or public holiday)");
			
		}
		
		// 规则3：结束日期必须是工作日（修 bug：原来判 start!=null 却查 end，且消息写成 Start date）
		if(end != null && !dayCalculator.isWorkingDay(end)) {
			
			error.add("End date " + end + " is not a working day (weekend or public holiday)");
			
		}
		
		// 日期都合法才继续算天数与额度（否则 calculateTrainingDays 会抛异常）
		if(start != null && end != null && !end.isBefore(start)) {
			
			// 规则4：天数由系统算，不让用户填（复用队友的 TrainingDayCalculator）
			BigDecimal days = dayCalculator.calculateTrainingDays(start, end);
			
			form.setTrainingDays(days);
			
			int year = start.getYear();
			
			// 规则5：这一年有没有配置额度（复用队友的 EntitlementService）
			TrainingEntitlement ent = entitlementService.findEntitlement(nowUser.getId(), year);
			
			if(ent == null) {
				
				error.add("Your " + year + " training entitlement is not configured. Please contact Admin.");
				
			}
			
			else {
				
				// 规则6：天数超额？已用天数由 EntitlementService 累加（excludeId 已内置，编辑时排除自己）
				BigDecimal usedDays = entitlementService.calculateUsedDays(nowUser.getId(), year, exId);
				
				if(usedDays.add(days).compareTo(ent.getEntitledDays()) > 0) {
					
					error.add("Training days exceeded: " + year + " quota is " + ent.getEntitledDays()
					
					+ " day(s), already used " + usedDays + ", this application needs " + days);
					
				}
				
				// 规则7：预算。收费分类必须填费用，且不能超剩余预算
				if(c != null && c.isFeeRequired()) {
					
					BigDecimal fee = form.getCourseFee();
					
					if(fee == null || fee.compareTo(BigDecimal.ZERO) <= 0) {
						
						error.add("Category '" + c.getName() + "' requires a course fee");
						
					}
					
					else {
						
						BigDecimal usedFee = entitlementService.calculateUsedBudget(nowUser.getId(), year, exId);
						
						BigDecimal r = ent.getAnnualBudget().subtract(usedFee);
						
						if (fee.compareTo(r) > 0 ) {
							
							error.add("Fee exceeds budget: annual budget " + ent.getAnnualBudget()
							
							+ ", already used " + usedFee + ", remaining " + r
							
							+ ", this application asks " + fee);
							
						}
						
					}
					
				}
				
				// 免费分类：费用强制归零
				else if(c != null ) {
					
					form.setCourseFee(BigDecimal.ZERO);
					
				}
				
			}
			
			// 规则8：不能和自己的其他 Applied/Updated/Approved 申请时间重叠
			List<ApplicationStatus> activeStatuses = new ArrayList<>();
			
			activeStatuses.add(ApplicationStatus.APPLIED);
			
			activeStatuses.add(ApplicationStatus.APPROVED);
			
			activeStatuses.add(ApplicationStatus.UPDATED);
			
			boolean overlap;
			
			if(exId == null) {
				
				// 新建：传 -1L，数据库没有 id=-1 的记录，等于不排除任何一条
				overlap = CourseAppRepo.existsOverlappingApplicationExcluding(nowUser.getId(), start, end, activeStatuses, -1L);
				
			}
			
			else {
				
				// 编辑：排除自己这条
				overlap = CourseAppRepo.existsOverlappingApplicationExcluding(nowUser.getId(), start, end, activeStatuses, exId);
				
			}
			
			if(overlap) {
				
				error.add("This period overlaps with another Applied/Updated/Approved application of yours");
				
			}
			
		}
		
		return error;
		
	}



	@Transactional
	public CourseApplication submit(CourseApplication form, Long userId) {
		
		User app = UserRepo.findById(userId).orElseThrow();
		
		form.setApplicant(app);
		
		form.setCreatedAt(LocalDateTime.now());
		
		form.setUpdatedAt(LocalDateTime.now());
		
		form.setStatus(ApplicationStatus.APPLIED);
		
		form.setManagerComment(null);
		
		form.setExperienceComment(null);
		
		form.setDecisionDate(null);
		
		CourseApplication saved = CourseAppRepo.save(form);
		
		if(app.getEmail() != null) {
			
			notificationService.notifyUser(app.getManager(), "New course application from " + app.getName());
			
		}
		
		return saved;
		
	}
	
	@Transactional
	public CourseApplication update(CourseApplication form, Long userId) {
		
		CourseApplication db = CourseAppRepo.findById(form.getId()).orElseThrow();
		
		checkOwner(db, userId);
		
		if(db.getStatus() != ApplicationStatus.APPLIED && db.getStatus() != ApplicationStatus.UPDATED ) {
			
			throw new IllegalStateException("Only APPLIED/UPDATED applications can be edited, current: " + db.getStatus());
			
		}
		
		db.setCourseTitle(form.getCourseTitle());
		
		db.setCategory(form.getCategory());
		
		db.setTrainingProvider(form.getTrainingProvider());
		
		db.setStartDate(form.getStartDate());
		
		db.setEndDate(form.getEndDate());
		
		db.setCourseFee(form.getCourseFee());
		
		db.setTrainingDays(form.getTrainingDays());
		
		db.setJustification(form.getJustification());
		
		db.setWorkDissemination(form.getWorkDissemination());
		
		db.setStatus(ApplicationStatus.UPDATED);
		
		db.setUpdatedAt(LocalDateTime.now());
		
		return CourseAppRepo.save(db);
		
		
	}

	@Transactional
	public void delete(Long appId, Long userId) {
		
		CourseApplication db = CourseAppRepo.findById(appId).orElseThrow();
		
		checkOwner(db, userId);
		
		if(db.getStatus() != ApplicationStatus.APPROVED && db.getStatus() != ApplicationStatus.UPDATED) {
			
			throw new IllegalStateException("Only APPLIED/UPDATED applications can be deleted, current: " + db.getStatus());
			
		}
		
		db.setStatus(ApplicationStatus.DELETED);
		
		db.setUpdatedAt(LocalDateTime.now());
		
		CourseAppRepo.save(db);
	}

	@Transactional
	public void cancel(Long appId, Long userId) {
		
		CourseApplication db = CourseAppRepo.findById(appId).orElseThrow();
		
		checkOwner(db, userId);
		
		if(db.getStatus() != ApplicationStatus.APPROVED) {
			
			throw new IllegalStateException("Only APPROVED applications can be cancelled, current: " + db.getStatus());
			
		}
		
		db.setStatus(ApplicationStatus.CANCELLED);
		
		db.setUpdatedAt(LocalDateTime.now());
		
		CourseAppRepo.save(db);
		
	}

	@Transactional
	public void markCompleted(Long appId, Long userId, String experienceComment) {
		
		CourseApplication db = CourseAppRepo.findById(appId).orElseThrow();
    
		checkOwner(db, userId);
		
		if(db.getStatus() != ApplicationStatus.APPROVED) {
			
			throw new IllegalStateException("Only APPROVED applications can be marked completed, current: " + db.getStatus());
			
		}
		
		db.setStatus(ApplicationStatus.COMPLETED);
		
		db.setExperienceComment(experienceComment);
		
		db.setUpdatedAt(LocalDateTime.now());	
		
		CourseAppRepo.save(db);
	}

	//========================MANAGER=================================================

	@Transactional
	public void approve(Long appId, Long mangerId, String comment) {
		
		CourseApplication db = CourseAppRepo.findById(appId).orElseThrow();
		
		checkManager(db, mangerId);
		
		checkComment(comment);
		
		if(db.getStatus() != ApplicationStatus.APPLIED && db.getStatus() != ApplicationStatus.UPDATED) {
			
			throw new IllegalStateException("Only APPLIED/UPDATED applications can be approved, current: " + db.getStatus());
			
		}
		
		db.setStatus(ApplicationStatus.APPROVED);
		
		db.setUpdatedAt(LocalDateTime.now());
		
		db.setManagerComment(comment);
		
		db.setDecisionDate(LocalDateTime.now());
		
		CourseAppRepo.save(db);
	}

	@Transactional
	public void reject(Long appId, Long mangerId, String comment) {
		
		CourseApplication db = CourseAppRepo.findById(appId).orElseThrow();
		
        checkManager(db, mangerId);
		
		checkComment(comment);
		
		if(db.getStatus() != ApplicationStatus.APPLIED && db.getStatus() != ApplicationStatus.UPDATED) {
			
			throw new IllegalStateException("Only APPLIED/UPDATED applications can be rejected, current: " + db.getStatus());
			
		}
		
		db.setStatus(ApplicationStatus.REJECTED);
		
		db.setManagerComment(comment);
		
		db.setDecisionDate(LocalDateTime.now());
		
		db.setUpdatedAt(LocalDateTime.now());
		
		CourseAppRepo.save(db);
		
		notificationService.notifyUser(db.getApplicant(), "Your course application has been REJECTED");
		
	}

	// 额度/预算使用情况汇总：委托给队友的 EntitlementService（原来的 Summary 与它重复，已删）
	public String Summary(Long userId, int year) {
		
		return entitlementService.usageSummary(userId, year);
		
	}

	private void checkOwner(CourseApplication app, Long Uid) {
		
		if(!app.getApplicant().getId().equals(Uid)) {
			
			throw new IllegalStateException("You can only operate on your own applications");
			
		}
		
	}

	private void checkManager(CourseApplication app, Long Mid) {
		
		if(app.getApplicant() == null || app.getApplicant().getManager() == null
				|| !app.getApplicant().getManager().getId().equals(Mid)) {
			
			throw new IllegalStateException("You are not the manager of this applicant");
			
		}
		
	}

	private void checkComment(String comment) {
		
		if(comment == null || comment.trim().isEmpty()) {
			
			throw new IllegalArgumentException("Comment is mandatory for approve/reject");
			
		}
	}



}
