package sg.edu.iss.demo;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.jayway.jsonpath.JsonPath;
import java.nio.file.Path;
import java.util.concurrent.TimeUnit;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.transaction.annotation.Transactional;
import sg.edu.iss.demo.repo.UserRepository;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class CalendarEventTests {
    @Autowired MockMvc mvc;
    @Autowired UserRepository users;
    @Value("${local.server.port}") int port;

    MockHttpSession session(String username) {
        MockHttpSession session = new MockHttpSession();
        session.setAttribute("loggedInUser", users.findByUsername(username).orElseThrow());
        return session;
    }

    String token(MockHttpSession session) throws Exception {
        String body = mvc.perform(get("/api/calendar/session").session(session))
            .andExpect(status().isOk()).andReturn().getResponse().getContentAsString();
        return JsonPath.read(body, "$.csrf.token");
    }

    MockHttpServletRequestBuilder write(MockHttpServletRequestBuilder request, MockHttpSession session,
                                       String body) throws Exception {
        return request.session(session).header("X-CSRF-TOKEN", token(session))
            .contentType(MediaType.APPLICATION_JSON).content(body);
    }

    String event(String title, boolean allDay, String times) {
        return "{\"title\":\"" + title + "\",\"date\":\"2026-10-15\",\"allDay\":" + allDay
            + ",\"details\":\"Private note\",\"color\":\"blue\"," + times + "}";
    }

    @Test @Transactional
    void allDayCrudAndOwnershipUseRealSessionCsrfToken() throws Exception {
        MockHttpSession owner = session("emp1"), other = session("emp2");
        String body = event("Calendar check", true, "\"startTime\":null,\"endTime\":null");
        String response = mvc.perform(write(post("/api/calendar/events"), owner, body))
            .andExpect(status().isCreated()).andExpect(jsonPath("$.allDay").value(true))
            .andReturn().getResponse().getContentAsString();
        String id = JsonPath.read(response, "$.id");
        mvc.perform(get("/api/calendar/events?year=2026&month=10").session(owner))
            .andExpect(status().isOk()).andExpect(jsonPath("$.events[0].id").value(id));
        mvc.perform(get("/api/calendar/events?year=2026&month=10").session(other))
            .andExpect(status().isOk()).andExpect(jsonPath("$.events").isEmpty());
        mvc.perform(write(put("/api/calendar/events/" + id), other, body))
            .andExpect(status().isNotFound());
        mvc.perform(delete("/api/calendar/events/" + id).session(other)
            .header("X-CSRF-TOKEN", token(other))).andExpect(status().isNotFound());
        mvc.perform(write(put("/api/calendar/events/" + id), owner, body.replace("Calendar check", "Changed")))
            .andExpect(status().isOk()).andExpect(jsonPath("$.title").value("Changed"));
        mvc.perform(delete("/api/calendar/events/" + id).session(owner)
            .header("X-CSRF-TOKEN", token(owner))).andExpect(status().isNoContent());
        mvc.perform(get("/api/calendar/events?year=2026&month=10").session(owner))
            .andExpect(status().isOk()).andExpect(jsonPath("$.events").isEmpty());
    }

    @Test @Transactional
    void timedEventsReturnMinutePrecisionAndInvalidInputsAreRejected() throws Exception {
        MockHttpSession owner = session("emp1");
        String body = event("Timed check", false, "\"startTime\":\"09:00\",\"endTime\":\"10:30\"");
        mvc.perform(write(post("/api/calendar/events"), owner, body))
            .andExpect(status().isCreated()).andExpect(jsonPath("$.startTime").value("09:00"));
        mvc.perform(get("/api/calendar/events?year=2026&month=10").session(owner))
            .andExpect(status().isOk()).andExpect(jsonPath("$.events[0].endTime").value("10:30"));
        mvc.perform(write(post("/api/calendar/events"), owner, body.replace("10:30", "08:00")))
            .andExpect(status().isBadRequest());
        mvc.perform(write(post("/api/calendar/events"), owner, body.replace("2026-10-15", "2026-02-30")))
            .andExpect(status().isBadRequest());
        mvc.perform(post("/api/calendar/events").session(owner).contentType(MediaType.APPLICATION_JSON).content(body))
            .andExpect(status().isForbidden());
        mvc.perform(get("/api/calendar/events?year=2026&month=10"))
            .andExpect(status().isUnauthorized());
    }

    @Test
    void browserMyEventsWorkflow() throws Exception {
        String script = System.getProperty("cats.calendar.browserScript");
        Assumptions.assumeTrue(script != null, "Optional browser check");
        Process process = new ProcessBuilder(System.getProperty("cats.calendar.node"),
            Path.of(script).toAbsolutePath().toString(), "http://127.0.0.1:" + port).inheritIO().start();
        assertTrue(process.waitFor(90, TimeUnit.SECONDS), "Browser check timed out");
        assertEquals(0, process.exitValue(), "My events browser workflow failed");
    }
}
