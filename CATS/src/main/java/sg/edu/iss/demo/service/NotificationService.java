package sg.edu.iss.demo.service;


import org.springframework.stereotype.Service;

import sg.edu.iss.demo.model.NotificationLog;
import sg.edu.iss.demo.model.NotificationStatus;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.repo.NotificationLogRepository;

@Service
public class NotificationService {
	
	private final NotificationLogRepository notiRepo;
	
	public NotificationService(NotificationLogRepository notiRepo) {
		
		this.notiRepo = notiRepo;
		
	}
	
    public void notifyUser(User name, String subject) {
    	
    	NotificationLog log = new NotificationLog();
    	
    	if(name.getEmail() != null && !name.getEmail().isEmpty()) {
    	
    		log.setRecipientEmail(name.getEmail());
    		
    	}
    	
    	else {
    		
    		log.setRecipientEmail(name.getUsername() + "@iss.nus.edu");
    		
    	}
    	
    	log.setSubject(subject);
    	
    	log.setStatus(NotificationStatus.PENDING);
    	
    	System.out.println("[Simulated email] TO: " + log.getRecipientEmail());
    	
    	System.out.println("[Simulated email] Subject " + subject );
    	
    	System.out.println("[Simulated email] Link:http://localhost:8080/login");
    	
    	log.markSent();
    	
    	notiRepo.save(log);
    }

}
