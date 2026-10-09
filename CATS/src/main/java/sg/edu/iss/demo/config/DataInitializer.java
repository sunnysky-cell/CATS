package sg.edu.iss.demo.config;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import sg.edu.iss.demo.model.CourseCategory;
import sg.edu.iss.demo.model.PublicHoliday;
import sg.edu.iss.demo.model.Role;
import sg.edu.iss.demo.model.TrainingEntitlement;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.repo.CourseCategoryRepository;
import sg.edu.iss.demo.repo.PublicHolidayRepository;
import sg.edu.iss.demo.repo.TrainingEntitlementRepository;
import sg.edu.iss.demo.repo.UserRepository;

@Configuration 
public class DataInitializer {
	
	@Bean
	CommandLineRunner initData (UserRepository userRepo,
	                            CourseCategoryRepository categoryRepo,
	                            PublicHolidayRepository holidayRepo,
	                            TrainingEntitlementRepository entitlementRepo,
	                            PasswordEncoder passwordEncoder) {
		
		
		return args -> {
			
			if(userRepo.count() > 0) {
				
				return;
				
			}
			
			String encodedPassword = passwordEncoder.encode("password123");
			
			//1 admin + 1 manager + 2 employee
			
			User admin = new User();
			
			admin.setUsername("admin");
			
			admin.setPassword(encodedPassword);
			
			admin.setName("System Administrator");
			
			admin.setRole(Role.ADMIN);
			
			admin.setEmail("admin@iss.nus.edu");
			
			admin.setDesignation("Administrative");
			
			admin.setEnabled(true);
			
			admin = userRepo.save(admin);
			
			
			
			User manager = new User();
			
			manager.setUsername("manager");
			
			manager.setPassword(encodedPassword);
			
			manager.setName("Norman Manager");
			
			manager.setRole(Role.MANAGER);
			
			manager.setEmail("manager@iss.nus.edu");
			
			manager.setDesignation("Professional");
			
			manager.setManager(admin);
			
			manager.setEnabled(true);
			
			manager = userRepo.save(manager);
			
			
			
			User emp1 = new User();
			
			emp1.setUsername("emp1");
			
			emp1.setPassword(encodedPassword);
			
			emp1.setName("Hook Liao");
			
			emp1.setRole(Role.EMPLOYEE);
			
			emp1.setEmail("emp1@iss.nus.edu");
			
			emp1.setDesignation("Professional");
			
			emp1.setManager(manager);
			
			emp1.setEnabled(true);
			
			emp1 = userRepo.save(emp1);
			
			
			
            User emp2 = new User();
			
            emp2.setUsername("emp2");
			
            emp2.setPassword(encodedPassword);
			
            emp2.setName("Bobo");
			
            emp2.setRole(Role.EMPLOYEE);
			
            emp2.setEmail("emp2@iss.nus.edu");
			
            emp2.setDesignation("Professional");
			
            emp2.setManager(manager);
			
            emp2.setEnabled(true);
			
            emp2 = userRepo.save(emp2);
            
            
            
            int year = LocalDate.now().getYear();
            
            entitlementRepo.save(TrainingEntitlement.forUser(manager, year, new BigDecimal("2000.00")));
            
            entitlementRepo.save(TrainingEntitlement.forUser(emp1, year, new BigDecimal("2000.00")));
            
            entitlementRepo.save(TrainingEntitlement.forUser(emp2, year, new BigDecimal("2000.00")));
            
            
            
            categoryRepo.save(CourseCategory.internalTraining());
            
            categoryRepo.save(CourseCategory.externalCourse());
            
            categoryRepo.save(CourseCategory.professionalCertification());
            
            
            PublicHoliday h = new PublicHoliday();
            
            h.setHolidayDate(LocalDate.of(2026, 1, 1).atStartOfDay());
            
            h.setDescription("New Year");
            
            holidayRepo.save(h);
			
		};
		
	}

}
