package sg.edu.iss.demo.service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sg.edu.iss.demo.model.Role;
import sg.edu.iss.demo.model.TrainingEntitlement;
import sg.edu.iss.demo.model.User;
import sg.edu.iss.demo.repo.TrainingEntitlementRepository;
import sg.edu.iss.demo.repo.UserRepository;

@Service
public class UserService {
	    private final UserRepository userRepo;
	    private final TrainingEntitlementRepository entitlementRepo;

	    private static final BigDecimal DEFAULT_ANNUAL_BUDGET =
	            new BigDecimal("2000.00");

	    public UserService(
	            UserRepository userRepo,
	            TrainingEntitlementRepository entitlementRepo) {
	
	        this.userRepo = userRepo;
	        this.entitlementRepo = entitlementRepo;
	    }

//USER MANAGEMENT - Returns all users for the Admin user-management page.

	    public List<User> findAll() {
	
	        return userRepo.findAll();
	    }

	    public User findById(Long id) {
	
	        return userRepo.findById(id)
	                .orElseThrow(() ->
	                        new IllegalArgumentException(
	                                "User not found: " + id));
	    }

	    public List<User> findManagers() {
	
	        List<User> managers = new ArrayList<>();
	
	        for (User user : userRepo.findAll()) {
	
	            if (user.getRole() == Role.MANAGER
	                    && user.isEnabled()) {
	
	                managers.add(user);
	            }
	        }
	
	        return managers;
	    }

	    @Transactional
	    public User create(
	            User user,
	            Long managerId) {

// Validate username

	
	        if (user.getUsername() == null
	                || user.getUsername().isBlank()) {
	
	            throw new IllegalArgumentException(
	                    "Username is required.");
	        }
	
	        String username =
	                user.getUsername().trim();

	        if (userRepo.findByUsername(username).isPresent()) {
	
	            throw new IllegalArgumentException(
	                    "Username '" + username
	                            + "' already exists.");
	        }
	
	        user.setUsername(username);

// New users are active by default
	        user.setEnabled(true);

// Assign manager if Admin selected one
	        if (managerId != null) {
	
	            User manager =
	                    findById(managerId);
	
	            if (manager.getRole() != Role.MANAGER) {
	
	                throw new IllegalArgumentException(
	                        "Selected user is not a manager.");
	            }
	
	            if (!manager.isEnabled()) {
	
	                throw new IllegalArgumentException(
	                        "Disabled manager cannot be assigned.");
	            }
	
	            user.setManager(manager);
	        }
// Save user first so that a database ID is generated
	        User savedUser =
	                userRepo.save(user);
	        
// Automatically create current-year entitlement
	        createDefaultEntitlement(savedUser);

	        return savedUser;
	    }
	    
	    @Transactional
	    public User updateProfile(
	            Long userId,
	            String name,
	            String email,
	            String designation,
	            Long managerId) {
	
	        User user =
	                findById(userId);

// Validate profile data
	        if (name == null
	                || name.isBlank()) {
	
	            throw new IllegalArgumentException(
	                    "Name is required.");
	        }
	
	        if (designation == null
	                || designation.isBlank()) {
	
	            throw new IllegalArgumentException(
	                    "Designation is required.");
	        }
	
	
	        user.setName(name.trim());
	
	        user.setEmail(
	                email == null || email.isBlank()
	                        ? null
	                        : email.trim());
	
	        user.setDesignation(
	                designation.trim());

// Update approval hierarchy
	        if (managerId == null) {
	
	            user.setManager(null);
	
	        } else {
	
	            User manager =
	                    findById(managerId);
	
	
// User cannot manage themselves
	            if (user.getId().equals(
	                    manager.getId())) {
	
	                throw new IllegalArgumentException(
	                        "A user cannot be their own manager.");
	            }
	
	
	            if (manager.getRole()
	                    != Role.MANAGER) {
	
	                throw new IllegalArgumentException(
	                        "Selected user is not a manager.");
	            }
	
	
	            if (!manager.isEnabled()) {
	
	                throw new IllegalArgumentException(
	                        "Disabled manager cannot be assigned.");
	            }
	
	
	            user.setManager(manager);
	        }
	
	
	        return userRepo.save(user);
	    }

	    @Transactional
	    public void changeRole(
	            Long userId,
	            Role role) {
	
	        if (role == null) {
	
	            throw new IllegalArgumentException(
	                    "Role is required.");
	        }
	
	
	        User user =
	                findById(userId);
	
	        user.setRole(role);
	
	        userRepo.save(user);
	    }

	    @Transactional
	    public void toggleEnabled(Long userId) {
	
	        User user =
	                findById(userId);
	
	        user.setEnabled(
	                !user.isEnabled());
	
	        userRepo.save(user);
	    }

// ADMIN MODULE - TRAINING ENTITLEMENT

	    private void createDefaultEntitlement(
	            User user) {
	
	        int currentYear =
	                LocalDate.now().getYear();

// Avoid duplicate user/year entitlement
	        if (entitlementRepo
	                .findByUserIdAndYear(
	                        user.getId(),
	                        currentYear)
	                .isPresent()) {
	
	            return;
	        }
	
	
	        TrainingEntitlement entitlement =
	                TrainingEntitlement.forUser(
	                        user,
	                        currentYear,
	                        DEFAULT_ANNUAL_BUDGET);
	
	
	        entitlementRepo.save(
	                entitlement);
	    }

	    @Transactional
	    public TrainingEntitlement saveEntitlement(
	            Long userId,
	            Integer year,
	            BigDecimal entitledDays,
	            BigDecimal annualBudget) {

// Validation
	        if (year == null) {
	
	            throw new IllegalArgumentException(
	                    "Year is required.");
	        }
	
	
	        if (entitledDays == null) {
	
	            throw new IllegalArgumentException(
	                    "Training days are required.");
	        }
	
	
	        if (entitledDays.signum() < 0) {
	
	            throw new IllegalArgumentException(
	                    "Training days cannot be negative.");
	        }
	
	
	        if (annualBudget == null) {
	
	            throw new IllegalArgumentException(
	                    "Annual budget is required.");
	        }
	
	
	        if (annualBudget.signum() < 0) {
	
	            throw new IllegalArgumentException(
	                    "Annual budget cannot be negative.");
	        }
	
	
	        User user =
	                findById(userId);

// UPSERT
	        TrainingEntitlement entitlement =
	                entitlementRepo
	                        .findByUserIdAndYear(
	                                userId,
	                                year)
	                        .orElse(null);
	
	
// No existing entitlement -> create one
	        if (entitlement == null) {
	
	            entitlement =
	                    new TrainingEntitlement();
	
	            entitlement.setUser(user);
	            entitlement.setYear(year);
	        }
	
	
	        // Existing entitlement -> fields are simply updated
	        entitlement.setEntitledDays(
	                entitledDays);
	
	        entitlement.setAnnualBudget(
	                annualBudget);
	
	
	        return entitlementRepo.save(
	                entitlement);
	    }

	    public List<TrainingEntitlement>
	            findEntitlements(Long userId) {
	
	        /*
	         * Confirm that the user exists first.
	         * This avoids displaying entitlement records for an
	         * invalid user ID.
	         */
	        findById(userId);
	
	        return entitlementRepo
	                .findByUserIdOrderByYearDesc(
	                        userId);
	    }
}