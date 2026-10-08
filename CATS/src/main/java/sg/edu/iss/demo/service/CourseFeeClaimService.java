package sg.edu.iss.demo.service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import sg.edu.iss.demo.model.ApplicationStatus;
import sg.edu.iss.demo.model.ClaimStatus;
import sg.edu.iss.demo.model.CourseApplication;
import sg.edu.iss.demo.model.CourseFeeClaim;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.repo.CourseApplicationRepository;
import sg.edu.iss.demo.repo.CourseFeeClaimRepository;
import java.util.Optional;

@Service
public class CourseFeeClaimService {

	private final CourseFeeClaimRepository courseFeeClaimRepo;
	
	private final CourseApplicationRepository courseAppRepeo;

	private final NotificationService notifService;
	
	public CourseFeeClaimService(CourseFeeClaimRepository courseFeeClaimRepo, CourseApplicationRepository courseAppRepeo, NotificationService notifService) {
		
		this.courseFeeClaimRepo = courseFeeClaimRepo;
		
		this.notifService = notifService;
		
		this.courseAppRepeo = courseAppRepeo;

	}
	
	public List<CourseFeeClaim> findByClaimant_Id(Long userId) {
		
		return courseFeeClaimRepo.findByClaimant_Id(userId);
				
	}
	
	public CourseFeeClaim findById(Long id) {
		
		return courseFeeClaimRepo.findById(id).orElse(null);
		
	}
	
	public List<CourseFeeClaim> findClaimForManager(Long managerId){
		
		return courseFeeClaimRepo.findByClaimant_Manager_IdAndStatus(managerId, ClaimStatus.SUBMITTED);
		
	}
	
	@Transactional
	public String submitClaim(Long applicantionId, Long userId, BigDecimal amount, String receiptName, String certificateName) {
		
		CourseApplication app = courseAppRepeo.findById(applicantionId).orElse(null);
		
		if(app == null) {
			
			return "Application not found";
			
		}
		
		if(!app.getApplicant().getId().equals(userId)) {
			
			return "You can only claim for your own completed course";
			
		}
		
		if(!app.getCategory().isFeeRequired()) {
			
			return "Internal training is free, no claim needed";
			
		}
		
		if(app.getStatus()!= ApplicationStatus.COMPLETED) {
			
			return "Only COMPLETED courses can be claimed, current status: " + app.getStatus();
			
		}
		
		if(courseFeeClaimRepo.findByApplication_Id(applicantionId).isPresent()){
			
			return "This application already has a claim";
			
		}
		
		if(amount == null || amount.compareTo(BigDecimal.ZERO) <= 0) {
			
			return "Claim amount must be greater than 0";
			
		}
		
		if(app.getCourseFee()!= null && amount.compareTo(app.getCourseFee()) > 0)  {
			
			return "Claim amount " + amount + " exceeds course fee " + app.getCourseFee();
			
		}
		
		if(receiptName == null || receiptName.isEmpty()) {
			
			return "Receipt file name is required";
			
		}
		
		if (certificateName == null || certificateName.isEmpty()) {
			
			return "Certificate file name is required";
		}
		
		CourseFeeClaim claim = new CourseFeeClaim();
		
		claim.setApplication(app);
		
		claim.setClaimant(app.getApplicant());
		
		claim.setClaimAmount(amount);
		
		claim.setReceiptFilePath(receiptName);
		
		claim.setCertificateFilePath(certificateName);
		
		claim.setStatus(ClaimStatus.SUBMITTED);
		
		claim.setSubmittedAt(LocalDateTime.now());
		
		courseFeeClaimRepo.save(claim);
		
		if(app.getApplicant().getManager()!= null) {
			
			notifService.notifyUser(app.getApplicant().getManager(), "New fee claim from: " + app.getApplicant().getName());
			
		}
		
		return null;
	}
	
	@Transactional
	public void approve(Long claimId, String comment, Long managerId) {
		
		CourseFeeClaim claim = courseFeeClaimRepo.findById(claimId).orElseThrow();
		
		checkManager(claim, managerId);
		
		checkComment(comment);
		
		if(claim.getStatus()!= ClaimStatus.SUBMITTED) {
			
			throw new IllegalStateException("Only SUBMITTED claims can be decided, current: " + claim.getStatus());
			
		}
		
		claim.setStatus(ClaimStatus.APPROVED);
		
		claim.setManagerComment(comment);
		
		claim.setDecisionDate(LocalDateTime.now());
		
		courseFeeClaimRepo.save(claim);
		
		notifService.notifyUser(claim.getClaimant(), "Your fee claim has been APPROVED");
		
	}
	
	@Transactional
	public void reject(Long claimId, String comment, Long managerId) {
		
		CourseFeeClaim claim = courseFeeClaimRepo.findById(claimId).orElseThrow();
		
        checkManager(claim, managerId);
		
		checkComment(comment);
		
        if(claim.getStatus()!= ClaimStatus.SUBMITTED) {
			
			throw new IllegalStateException("Only SUBMITTED claims can be decided, current: " + claim.getStatus());
			
		}
        
        claim.setStatus(ClaimStatus.REJECTED);
		
		claim.setManagerComment(comment);
		
		claim.setDecisionDate(LocalDateTime.now());
		
		notifService.notifyUser(claim.getClaimant(), "Your fee claim has been REJECTED");
		
	}
	
	public void checkManager(CourseFeeClaim claim, Long managerId ) {
		
		User claimant = claim.getClaimant();
		
		if(claimant.getManager() != null || !claimant.getManager().equals(managerId)) {
			
			throw new IllegalStateException("You are not the manager of this claimant");
			
		}
		
		
	}
	
	public void checkComment(String comment) {
		
		if(comment != null || comment.trim().isEmpty()) {
			
			throw new IllegalArgumentException("Comment is mandatory for approve/reject");
			
		}
		
	}

	
	
}
