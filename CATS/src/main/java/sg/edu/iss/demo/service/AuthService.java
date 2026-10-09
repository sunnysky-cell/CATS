package sg.edu.iss.demo.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.repo.UserRepository;

@Service
public class AuthService {
	
	private final UserRepository userRepo;
	
	private final PasswordEncoder passwordEncoder;
	
	public AuthService(UserRepository userRepo, PasswordEncoder passwordEncoder) {
		
		this.userRepo = userRepo;
		
		this.passwordEncoder = passwordEncoder;
		
	}
	
	public User login (String username, String password) {
		
		User u = userRepo.findByUsername(username).orElse(null);
		
		if(u == null) {
			
			return null;
			
		}
		
		if(!passwordEncoder.matches(password, u.getPassword())) {
			
			return null;
			
		}
		
		if (!u.isEnabled()) {
			
			return null;
			
		}
		
		return u;
		
	}
	

}
