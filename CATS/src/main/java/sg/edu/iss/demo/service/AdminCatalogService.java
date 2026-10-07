package sg.edu.iss.demo.service;

import java.time.LocalDate;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sg.edu.iss.demo.model.CourseCategory;
import sg.edu.iss.demo.model.PublicHoliday;
import sg.edu.iss.demo.repo.CourseCategoryRepository;
import sg.edu.iss.demo.repo.PublicHolidayRepository;

@Service
public class AdminCatalogService {

	private final CourseCategoryRepository categoryRepo;
    private final PublicHolidayRepository holidayRepo;

    public AdminCatalogService(
            CourseCategoryRepository categoryRepo,
            PublicHolidayRepository holidayRepo) {

        this.categoryRepo = categoryRepo;
        this.holidayRepo = holidayRepo;
    }

// =========================
// Course Category
// =========================

    public List<CourseCategory> findAllCategories() {
        return categoryRepo.findAll();
    }

    public List<CourseCategory> findActiveCategories() {
        return categoryRepo.findByActiveTrue();
    }

    public CourseCategory findCategoryById(Long id) {

        return categoryRepo.findById(id)
                .orElseThrow(() ->
                        new IllegalArgumentException(
                                "Course category not found: " + id));
    }

    @Transactional
    public CourseCategory createCategory(
            String name,
            String description,
            boolean feeRequired,
            boolean allowHalfDay) {

        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException(
                    "Category name is required.");
        }

        String trimmedName = name.trim();

        // ADMIN MODULE:
        // Validate CA business rules for the category.
        validateCategoryRule(
                feeRequired,
                allowHalfDay);

        if (categoryRepo
                .findByNameIgnoreCase(trimmedName)
                .isPresent()) {

            throw new IllegalArgumentException(
                    "Category '" + trimmedName
                            + "' already exists.");
        }

        CourseCategory category =
                new CourseCategory();

        category.setName(trimmedName);

        category.setDescription(
                description == null
                        || description.isBlank()
                        ? null
                        : description.trim());

        category.setFeeRequired(
                feeRequired);

        category.setAllowHalfDay(
                allowHalfDay);

        category.setActive(true);

        return categoryRepo.save(category);
    }

    @Transactional
    public CourseCategory updateCategory(
            Long id,
            String name,
            String description,
            boolean feeRequired,
            boolean allowHalfDay) {

        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException(
                    "Category name is required.");
        }

        String trimmedName = name.trim();

        // ADMIN MODULE:
        // Reuse the same category business-rule validation.
        validateCategoryRule(
                feeRequired,
                allowHalfDay);

        CourseCategory category =
                findCategoryById(id);

        categoryRepo.findByNameIgnoreCase(trimmedName)
                .filter(existing ->
                        !existing.getId().equals(id))
                .ifPresent(existing -> {
                    throw new IllegalArgumentException(
                            "Category '" + trimmedName
                                    + "' already exists.");
                });

        category.setName(trimmedName);

        category.setDescription(
                description == null
                        || description.isBlank()
                        ? null
                        : description.trim());

        category.setFeeRequired(
                feeRequired);

        category.setAllowHalfDay(
                allowHalfDay);

        return categoryRepo.save(category);
    }

    @Transactional
    public void toggleCategoryActive(Long id) {

        CourseCategory category = categoryRepo.findById(id).orElseThrow(() ->
                        new IllegalArgumentException("Course category not found: " + id));

        category.setActive(!category.isActive());

        categoryRepo.save(category);
    }

    private void validateCategoryRule(
            boolean feeRequired,
            boolean allowHalfDay) {

        if (allowHalfDay && feeRequired) {
            throw new IllegalArgumentException(
                    "Half-day is only allowed for free internal training.");
        }
    }

// =========================
// Public Holiday
// =========================

    public List<PublicHoliday> findHolidaysOfYear(int year) {

        return holidayRepo.findByHolidayDateBetween(
                LocalDate.of(year, 1, 1).atStartOfDay(),
                LocalDate.of(year, 12, 31).atTime(23, 59, 59));
    }

    @Transactional
    public PublicHoliday createHoliday(LocalDate date,String description) {
// Validate date
        if (date == null) {
            throw new IllegalArgumentException(
                    "Holiday date is required.");
        }

// Validate description
        if (description == null
                || description.isBlank()) {

            throw new IllegalArgumentException(
                    "Holiday description is required.");
        }

// Check duplicate holiday on the same date
        List<PublicHoliday> existing =
                holidayRepo.findByHolidayDateBetween(
                        date.atStartOfDay(),
                        date.atTime(23, 59, 59));

        if (!existing.isEmpty()) {
            throw new IllegalArgumentException(
                    "Public holiday already exists on " + date);
        }
// Use the existing shared PublicHoliday model.
        PublicHoliday holiday =
                new PublicHoliday(
				    date.atStartOfDay(),
				    description.trim());

        return holidayRepo.save(holiday);
    }

    @Transactional
    public void deleteHoliday(Long id) {

        if (!holidayRepo.existsById(id)) {
            throw new IllegalArgumentException(
                    "Public holiday not found: " + id);
        }

        holidayRepo.deleteById(id);
    }
}
