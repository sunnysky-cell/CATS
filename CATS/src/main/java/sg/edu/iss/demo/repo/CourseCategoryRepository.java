package sg.edu.iss.demo.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import sg.edu.iss.demo.model.CourseCategory;

public interface CourseCategoryRepository extends JpaRepository<CourseCategory, Long> {

	List<CourseCategory> findByActiveTrue();
	
	Optional<CourseCategory> findByname(String name);
}
