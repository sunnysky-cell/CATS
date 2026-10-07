package sg.edu.iss.demo.service;

import java.math.BigDecimal;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import sg.edu.iss.demo.model.PublicHoliday;
import sg.edu.iss.demo.repo.PublicHolidayRepository;

@Service
public class TrainingDayCalculator {

	private final PublicHolidayRepository holidayRepo;

	public TrainingDayCalculator(PublicHolidayRepository holidayRepo) {
		this.holidayRepo = holidayRepo;
	}

	public boolean isWorkingDay(LocalDate date) {

		if (date == null) {
			return false;
		}

		DayOfWeek dayOfWeek = date.getDayOfWeek();

		if (dayOfWeek == DayOfWeek.SATURDAY
				|| dayOfWeek == DayOfWeek.SUNDAY) {
			return false;
		}

		List<PublicHoliday> holidays =
				holidayRepo.findByHolidayDateBetween(
						date.atStartOfDay(),
						date.atTime(23, 59, 59));

		return holidays.isEmpty();
	}

	public BigDecimal calculateTrainingDays(
			LocalDate startDate,
			LocalDate endDate) {

		if (startDate == null || endDate == null) {
			throw new IllegalArgumentException(
					"Start date and end date cannot be null");
		}

		if (endDate.isBefore(startDate)) {
			throw new IllegalArgumentException(
					"End date cannot be earlier than start date");
		}

		int count = 0;

		LocalDate currentDate = startDate;

		while (!currentDate.isAfter(endDate)) {

			if (isWorkingDay(currentDate)) {
				count++;
			}

			currentDate = currentDate.plusDays(1);
		}

		return new BigDecimal(count);
	}
}