package com.mycompany.bluraystore.controller;

import com.mycompany.bluraystore.service.DefaultMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/blueraystore-home")
public class HomeController {
    @Autowired
    private DefaultMovieService service;

    @RequestMapping("")
    public ModelAndView displayHome(){
        ModelAndView mv = new ModelAndView("blueraystore-home");
        mv.addObject("movies", service.getMovieList());
        return mv;
    }
}
