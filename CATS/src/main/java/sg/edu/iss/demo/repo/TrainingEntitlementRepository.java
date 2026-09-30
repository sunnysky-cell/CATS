package sg.edu.iss.demo.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import sg.edu.iss.demo.model.TrainingEntitlement;

public interface TrainingEntitlementRepository extends JpaRepository<TrainingEntitlement, Long> {

	Optional<TrainingEntitlement> findByUserIdAndYear(Long userId, Integer year);
}
