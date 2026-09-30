package sg.edu.iss.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import sg.edu.iss.demo.model.NotificationLog;

public interface NotificationLogRepository extends JpaRepository<NotificationLog, Long> {

}
