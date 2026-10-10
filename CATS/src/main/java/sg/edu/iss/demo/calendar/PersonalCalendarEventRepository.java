package sg.edu.iss.demo.calendar;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalCalendarEventRepository extends JpaRepository<PersonalCalendarEvent, Long> {
    List<PersonalCalendarEvent> findByOwnerIdAndEventDateBetweenOrderByEventDateAscStartTimeAscIdAsc(
        Long ownerId, LocalDate firstDay, LocalDate lastDay);

    Optional<PersonalCalendarEvent> findByIdAndOwnerId(Long id, Long ownerId);
}
