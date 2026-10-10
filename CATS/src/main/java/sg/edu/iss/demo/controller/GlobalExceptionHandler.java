package sg.edu.iss.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.resource.NoResourceFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler({IllegalStateException.class, IllegalArgumentException.class})
	public ModelAndView handleBusinessException(RuntimeException error) {

	    ModelAndView modelAndView = new ModelAndView("error");

	    modelAndView.addObject("error", error.getMessage());

	    modelAndView.setStatus(HttpStatus.BAD_REQUEST);

	    return modelAndView;
	}


	@ExceptionHandler(ResponseStatusException.class)
	public ModelAndView handleResponseStatusException(ResponseStatusException error) {

		ModelAndView modelAndView = new ModelAndView("error");

		if(error.getStatusCode() == HttpStatus.NOT_FOUND) {

			modelAndView.addObject("error", "The page or record you asked for does not exist");

		} else if(error.getStatusCode() == HttpStatus.FORBIDDEN) {

			modelAndView.addObject("error", "You are not allowed to view this page");

		} else {

			modelAndView.addObject("error", error.getReason());

		}

		modelAndView.setStatus(HttpStatus.valueOf(error.getStatusCode().value()));

		return modelAndView;
	}


	@ExceptionHandler(MissingServletRequestParameterException.class)
	public ModelAndView handleMissingParam(MissingServletRequestParameterException error) {

		ModelAndView modelAndView = new ModelAndView("error");

		modelAndView.addObject("error",
				"Please fill in all required fields. Missing: " + error.getParameterName());

		modelAndView.setStatus(HttpStatus.BAD_REQUEST);

		return modelAndView;
	}


	@ExceptionHandler(NoResourceFoundException.class)
	public ModelAndView handleNoResourceFound(NoResourceFoundException error) {

		ModelAndView modelAndView = new ModelAndView("error");

		modelAndView.addObject("error", "The page you asked for does not exist");

		modelAndView.setStatus(HttpStatus.NOT_FOUND);

		return modelAndView;
	}
	
	@ExceptionHandler(Exception.class)
		public ModelAndView handleUnexpectedException (Exception error) {
		
		    error.printStackTrace();

		    ModelAndView modelAndView = new ModelAndView("error");
		    
		    modelAndView.addObject("error","Unexpected error, please check your input and try again");

		    modelAndView.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);

		    return modelAndView;
	}

}
