package sg.edu.iss.demo.repo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sg.edu.iss.demo.model.ApplicationStatus;
import sg.edu.iss.demo.model.CourseApplication;

public interface CourseApplicationRepository extends JpaRepository<CourseApplication, Long> {

	@Query("""
	        SELECT ca FROM CourseApplication ca
	        WHERE ca.applicant.id = :userId
	          AND FUNCTION('YEAR', ca.startDate) = :year
	          AND ca.status IN :statuses
	        """)
	List<CourseApplication> findActiveByUserAndYear(
	        @Param("userId") Long userId,
	        @Param("year") int year,
	        @Param("statuses")
	        List<ApplicationStatus> statuses);
	
    @Query("""
            SELECT ca FROM CourseApplication ca
            WHERE ca.applicant.id = :userId
              AND FUNCTION('YEAR', ca.startDate) = :year
            """)
        List<CourseApplication> findByApplicantIdAndYear(
                @Param("userId") Long userId,
                @Param("year") Integer year,
                Pageable pageable);

	@Query("""
			SELECT ca FROM CourseApplication ca
			WHERE ca.applicant.manager.id = :managerId
			  AND ca.status IN :statuses
			""")
	List<CourseApplication> findByManagerIdAndStatusIn(@Param("managerId") Long managerId,
			@Param("statuses") List<ApplicationStatus> statuses, Pageable pageable);

	@Query("""
			SELECT (count(ca) > 0) FROM CourseApplication ca
			WHERE ca.applicant.id = :userId
			  AND ca.status IN :activeStatuses
			  AND ca.startDate <= :endDate
			  AND ca.endDate   >= :startDate
			""")
	boolean existsOverlappingApplication(@Param("userId") Long userId, @Param("startDate") LocalDate startDate,
			@Param("endDate") LocalDate endDate, @Param("activeStatuses") List<ApplicationStatus> activeStatuses);
			  
	@Query("""
			SELECT ca FROM CourseApplication ca
			JOIN FETCH ca.applicant
			JOIN FETCH ca.category
			WHERE ca.status = :status
			AND ca.startDate <= :monthEnd
			AND ca.endDate >= :monthStart
			ORDER BY ca.startDate ASC, ca.applicant.name ASC, ca.id ASC
			""")
	List<CourseApplication> findCalendarApplications(
			@Param("status")ApplicationStatus status,
			@Param("monthStart") LocalDate monthStart,
			@Param("monthEnd") LocalDate monthEnd);
}
