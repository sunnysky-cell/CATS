package sg.edu.iss.demo.calendar;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PersonalCalendarEventRepository extends JpaRepository<PersonalCalendarEvent, Long> {

	@Query("""
			SELECT e FROM PersonalCalendarEvent e
			WHERE e.ownerId = :ownerId
			AND e.eventDate BETWEEN :firstDay AND :lastDay
			ORDER BY e.eventDate, e.startTime, e.id
			""")
	List<PersonalCalendarEvent> findByOwnerIdAndMonth(@Param("ownerId") Long ownerId,
			@Param("firstDay") LocalDate firstDay, @Param("lastDay") LocalDate lastDay);

	Optional<PersonalCalendarEvent> findByIdAndOwnerId(Long id, Long ownerId);
}
