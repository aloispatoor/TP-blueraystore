package com.mycompany.bluraystore.controller;

import com.mycompany.bluraystore.entity.Movie;
import com.mycompany.bluraystore.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/movie")
public class MovieController {
    @Autowired
    private MovieService service;

    @GetMapping("")
    public List<Movie> list(){
        return service.getMovieList();
    }

    @PostMapping("/add")
    public Movie add(@RequestBody Movie movie){
        return service.registerMovie(movie);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id){
        return service.deleteMovie(id);
    }

    @GetMapping("/{id}")
    public Optional<Movie> displayMovie(@PathVariable("id") int id) {
        return service.getMovieById(id);
    }
}
