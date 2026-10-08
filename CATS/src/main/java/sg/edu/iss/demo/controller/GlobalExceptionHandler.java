package sg.edu.iss.demo.controller;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler({IllegalStateException.class, IllegalArgumentException.class})
	//optimize the name
	/*	
	public ModelAndView Business(RuntimeException error) {
		
		ModelAndView a = new ModelAndView("error");
		
		a.addObject("error", error.getMessage());
		
		return a;
	}
	*/
	public ModelAndView handleBusinessException(
	        RuntimeException error) {

	    ModelAndView modelAndView =
	            new ModelAndView("error");

	    modelAndView.addObject(
	            "error",
	            error.getMessage());

	    return modelAndView;
	}
	
	@ExceptionHandler(Exception.class)
	//optimize the name
	/*
	public ModelAndView other (Exception error) {
		
		error.printStackTrace();
		
		ModelAndView a = new ModelAndView("error");
		
		a.addObject("error","Unexpected error " + error.getMessage());
		
		return a;
	*/
		public ModelAndView handleUnexpectedException (Exception error) {
		
		    error.printStackTrace();

		    ModelAndView modelAndView = new ModelAndView("error");
		    
		    modelAndView.addObject("error","Unexpected error: " + error.getMessage());

		    return modelAndView;
	}

}
