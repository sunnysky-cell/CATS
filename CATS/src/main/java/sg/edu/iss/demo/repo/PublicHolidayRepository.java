package sg.edu.iss.demo.repo;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import sg.edu.iss.demo.model.PublicHoliday;

public interface PublicHolidayRepository extends JpaRepository<PublicHoliday, Long> {

	List<PublicHoliday> findByHolidayDateBetween(LocalDateTime startDate, LocalDateTime endDate);
}
