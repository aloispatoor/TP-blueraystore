package com.mycompany.bluraystore.service;

import com.mycompany.bluraystore.entity.Movie;
import com.mycompany.bluraystore.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    MovieRepository repository;

    public Movie registerMovie(Movie movie){
        return repository.save(movie);
    }

    public List<Movie> getMovieList() {
        return repository.findAll();
    }

    public Optional<Movie> getMovieById(int id){
        return repository.findById(id);
    }

    public String deleteMovie(int id){
        if(repository.findById(id).isPresent()){
            repository.deleteById(id);
            return "The movie is deleted";
        }
        return "No movie was found";
    }

}
