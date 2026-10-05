package sg.edu.iss.demo.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sg.edu.iss.demo.model.ClaimStatus;
import sg.edu.iss.demo.model.CourseFeeClaim;

public interface CourseFeeClaimRepository extends JpaRepository<CourseFeeClaim, Long> {

	List<CourseFeeClaim> findByClaimant_Id(Long userId);

	@Query("""
			SELECT c FROM CourseFeeClaim c
			WHERE c.claimant.manager.id = :managerId
			""")
	List<CourseFeeClaim> findClaimForManager(@Param("managerId") Long managerId);
	
	Optional<CourseFeeClaim> findByApplication_Id(Long applicationId);
	
	List<CourseFeeClaim> findByClaimant_Manager_IdAndStatus(Long managerId, ClaimStatus status);
}
