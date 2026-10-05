package sg.edu.iss.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import sg.edu.iss.demo.model.NotificationLog;
import sg.edu.iss.demo.model.NotificationStatus;

public interface NotificationLogRepository extends JpaRepository<NotificationLog, Long> {
	
	List<NotificationLog> findByStatus(NotificationStatus status);
	
	List<NotificationLog> findByRecipientEmailOrderBySentAtDesc(String email);

}
