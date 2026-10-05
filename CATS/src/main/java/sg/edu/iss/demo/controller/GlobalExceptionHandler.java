package sg.edu.iss.demo.controller;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler({IllegalStateException.class, IllegalArgumentException.class})
	
	public ModelAndView Business(RuntimeException error) {
		
		ModelAndView a = new ModelAndView("error");
		
		a.addObject("error", error.getMessage());
		
		return a;
	}
	
	@ExceptionHandler(Exception.class)
	
	public ModelAndView other (Exception error) {
		
		error.printStackTrace();
		
		ModelAndView a = new ModelAndView("error");
		
		a.addObject("error","Unexpected error " + error.getMessage());
		
		return a;
		
	}

}
