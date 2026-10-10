package sg.edu.iss.demo;

import static org.junit.jupiter.api.Assertions.*;
import java.time.LocalDate;
import java.util.Map;
import org.junit.jupiter.api.Test;
import org.springframework.beans.MutablePropertyValues;
import org.springframework.format.support.DefaultFormattingConversionService;
import org.springframework.validation.DataBinder;
import sg.edu.iss.demo.model.CourseApplication;

class CourseApplicationDateBindingTests {
    @Test
    void editDatesRenderAndBindUsingHtmlDateFormat() {
        CourseApplication form = new CourseApplication();
        form.setStartDate(LocalDate.of(2026, 11, 23));
        form.setEndDate(LocalDate.of(2026, 11, 24));
        DataBinder binder = new DataBinder(form, "form");
        binder.setConversionService(new DefaultFormattingConversionService());
        assertEquals("2026-11-23", binder.getBindingResult().getFieldValue("startDate"));
        assertEquals("2026-11-24", binder.getBindingResult().getFieldValue("endDate"));
        binder.bind(new MutablePropertyValues(Map.of("startDate", "2026-11-25", "endDate", "2026-11-26")));
        assertFalse(binder.getBindingResult().hasErrors());
        assertEquals(LocalDate.of(2026, 11, 25), form.getStartDate());
        assertEquals(LocalDate.of(2026, 11, 26), form.getEndDate());
    }
}
