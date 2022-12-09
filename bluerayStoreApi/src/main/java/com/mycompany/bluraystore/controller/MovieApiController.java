package com.mycompany.bluraystore.controller;

import com.mycompany.bluraystore.entity.Movie;
import com.mycompany.bluraystore.service.DefaultMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/movie")
public class MovieApiController {
    @Autowired
    private DefaultMovieService service;

    @RequestMapping("")
    public List<Movie> list(){
        return service.getMovieList();
    }
}
