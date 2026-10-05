package sg.edu.iss.demo.service;

import org.springframework.stereotype.Service;

import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.repo.UserRepository;

@Service
public class AuthService {
	
	private final UserRepository userRepo;
	
	public AuthService(UserRepository userRepo) {
		
		this.userRepo = userRepo;
		
	}
	
	public User login (String username, String password) {
		
		User u = userRepo.findByUsername(username).orElse(null);
		
		if(u == null) {
			
			return null;
			
		}
		
		if(!u.getPassword().equals(password)) {
			
			return null;
			
		}
		
		if (!u.isEnabled()) {
			
			return null;
			
		}
		
		return u;
		
	}
	

}
