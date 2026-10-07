package sg.edu.iss.demo.repo;

import java.util.List;
import java.util.Optional;
//update for Admin - User management queries
import sg.edu.iss.demo.model.Role;

import org.springframework.data.jpa.repository.JpaRepository;

import sg.edu.iss.demo.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByUsername(String username);

	List<User> findByManagerId(Long managerId);
	
// update for Admin - User management queries
    boolean existsByUsernameIgnoreCase(String username);
    List<User> findByRoleAndEnabledTrue(Role role);
}
