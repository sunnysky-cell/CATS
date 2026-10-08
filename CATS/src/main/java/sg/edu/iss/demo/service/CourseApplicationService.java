package sg.edu.iss.demo.service;

import java.math.BigDecimal;
import java.time.DayOfWeek;
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
import sg.edu.iss.demo.model.PublicHoliday;
import sg.edu.iss.demo.model.TrainingEntitlement;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.repo.CourseApplicationRepository;
import sg.edu.iss.demo.repo.CourseCategoryRepository;
import sg.edu.iss.demo.repo.NotificationLogRepository;
import sg.edu.iss.demo.repo.PublicHolidayRepository;
import sg.edu.iss.demo.repo.TrainingEntitlementRepository;
import sg.edu.iss.demo.repo.UserRepository;

@Service
public class CourseApplicationService {

	private final NotificationService notificationService;

	private final CourseApplicationRepository CourseAppRepo;
	
	private final CourseCategoryRepository CourseCategoryRepo;
	
	private final NotificationLogRepository NotifiRepo;
	
	private final PublicHolidayRepository PublicHolidayRepo;
	
	private final TrainingEntitlementRepository TrainingEntRepo;
	
	private final UserRepository UserRepo;
	
	public CourseApplicationService(CourseApplicationRepository CourseAppRepo, CourseCategoryRepository CourseCategoryRepo, NotificationLogRepository NotifiRepo, 
			PublicHolidayRepository PublicHolidayRepo, TrainingEntitlementRepository TrainingEntRepo, UserRepository UserRepo, NotificationService notificationService) {
		
		this.CourseAppRepo = CourseAppRepo;
		
		this.CourseCategoryRepo = CourseCategoryRepo;
		
		this.NotifiRepo = NotifiRepo;
		
		this.PublicHolidayRepo = PublicHolidayRepo;
		
		this.TrainingEntRepo = TrainingEntRepo;
		
		this.UserRepo = UserRepo;
		
		this.notificationService = notificationService;
		
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
		
		if(start != null && end != null && end.isBefore(start)) {
			
			error.add("End date cannot be earlier than start date");
			
		}
		
		if(start != null && !isWorkingDay(start)) {
			
			error.add("Start date " + start + " is not a working day (weekend or public holiday)");
			
		}
		
		if(start != null && !isWorkingDay(end)) {
			
			error.add("Start date " + end + " is not a working day (weekend or public holiday)");
			
		}
		
		
		if(start != null && end != null && !end.isBefore(start)) {
			
			BigDecimal days =  CT(start, end);
			
			form.setTrainingDays(days);
			
		
		
		int year = start.getYear();
		
		TrainingEntitlement ent = TrainingEntRepo.findByUserIdAndYear(nowUser.getId(), year).orElse(null);
		
		if(ent == null) {
			
			error.add("Your " + year + " training entitlement is not configured. Please contact Admin.");
			
		}
		
		else {
			
			BigDecimal Userdays = new BigDecimal("0");
			
			BigDecimal Userfees = new BigDecimal("0");
			
			List<CourseApplication> a = findActiveApplications(nowUser.getId(), year);
			
			for(CourseApplication b : a) {
				
				if(exId != null && b.getId().equals(exId)) {
					
					continue;
					
				}
				
				if(b.getTrainingDays() != null) {
					
					Userdays = Userdays.add(b.getTrainingDays());
					
				}
				
				if(b.getCourseFee() != null) {
					
					Userfees = Userfees.add(b.getCourseFee());
					
				}
					
				if(Userdays.add(days).compareTo(ent.getEntitledDays()) > 0) {
					
					error.add("Training days exceeded: " + year + " quota is " + ent.getEntitledDays()
					
					+ " day(s), already used " + Userdays + ", this application needs " + days);
					
				}
				
				if(c != null && c.isFeeRequired()) {
					
					BigDecimal fee = form.getCourseFee();
					
					if(fee == null || fee.compareTo(BigDecimal.ZERO) <= 0) {
						
						error.add("Category '" + c.getName() + "' requires a course fee");
						
					}
					
					else {
						
						BigDecimal r = ent.getAnnualBudget().subtract(Userfees);
						
						if (fee.compareTo(r) > 0 ) {
							
							error.add("Fee exceeds budget: annual budget " + ent.getAnnualBudget()
							+ ", already used " + Userfees + ", remaining " + r
							+ ", this application asks " + fee);
							
						}
						
						
					}
					
				}
				
				else if(c != null ) {
					
					form.setCourseFee(BigDecimal.ZERO);
					
				}
				
			}	
				
			}
			
		}
		
		if(start != null && end != null && !end.isBefore(start)) {
			
			List<ApplicationStatus> activeStatuses = new ArrayList<>();
			
			activeStatuses.add(ApplicationStatus.APPLIED);
			
			activeStatuses.add(ApplicationStatus.APPROVED);
			
			activeStatuses.add(ApplicationStatus.UPDATED);
			
			boolean overlap;
			
			if(exId == null) {
				
				overlap = CourseAppRepo.existsOverlappingApplicationExcluding(nowUser.getId(), start, end, activeStatuses, -1L);
				
			}
			
			else {
				
				overlap = CourseAppRepo.existsOverlappingApplicationExcluding(nowUser.getId(), start, end, activeStatuses, exId);
				
			}
			
			if(overlap == true) {
				
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
	
	public String Summary(Long userId, int year) {
		
		TrainingEntitlement ent = TrainingEntRepo.findByUserIdAndYear(userId, year).orElse(null);
		
		if (ent == null) {
			
			return "Entitlement not configured for " + year;
			
		}
		
		BigDecimal userdays = BigDecimal.ZERO;
		
		BigDecimal userfees = BigDecimal.ZERO;
		
		for(CourseApplication a : findActiveApplications(userId, year)) {
			
			if(a.getTrainingDays() != null) {
				
				userdays = userdays.add(a.getTrainingDays());
				
			}
			
			if(a.getCourseFee() != null) {
				
				userfees = userfees.add(a.getCourseFee());
				
			}
			
		}
		
		return "Days: " + userdays + " / " + ent.getEntitledDays() + " Budget used: " + userfees + " / " + ent.getAnnualBudget();
		
	}
	
	public boolean isWorkingDay(LocalDate d) {
		
		DayOfWeek day = d.getDayOfWeek();
		
		if(day == day.SATURDAY || day == day.SUNDAY) {
			
			return false;
			
		}
		
		List<PublicHoliday> ph = PublicHolidayRepo.findByHolidayDateBetween(d.atStartOfDay(), d.atStartOfDay());
		
		return ph.isEmpty();
		
	}
	
	private BigDecimal CT(LocalDate start, LocalDate end) {
		
		int count = 0;
		
		LocalDate d = start;
		
		while(!d.isAfter(end)) {
			
			if(isWorkingDay(d)) {
				
				count++;
				
			}
			
			d = d.plusDays(1);
			
		}
		
		return new BigDecimal(count);
		
	}
	
	
	private List<CourseApplication> findActiveApplications(Long userId, int year){
		
		List<ApplicationStatus> a = new ArrayList<>(); 
		
		a.add(ApplicationStatus.APPLIED);
		
		a.add(ApplicationStatus.APPROVED);
		
		a.add(ApplicationStatus.COMPLETED);
		
		a.add(ApplicationStatus.UPDATED);
		
		return CourseAppRepo.findActiveByUserAndYear(userId, year, a);
		
	}
	
	
	private void checkOwner(CourseApplication app, Long Uid) {
		
		if(!app.getApplicant().getId().equals(Uid)) {
			
			throw new IllegalStateException("You can only operate on your own applications");
			
		}
		
	}
	
	private void checkManager(CourseApplication app, Long Mid) {
		
		if(!app.getApplicant().getManager().getId().equals(Mid) || app.getApplicant() == null) {
			
			throw new IllegalStateException("You are not the manager of this applicant");
			
		}
		
	}
	
	private void checkComment(String comment) {
		
		if(comment == null || comment.trim().isEmpty()) {
			
			throw new IllegalArgumentException("Comment is mandatory for approve/reject");
			
		}
		
	}
	
	
	
}
