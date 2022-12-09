package com.mycompany.bluraystore.repository;

import com.mycompany.bluraystore.entity.Movie;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MemoryMovieRepository implements MovieRepositoryInterface {
    private static List<Movie> movies = new ArrayList();

    public void add(Movie movie){
        movies.add(movie);
    }

    @Override
    public List<Movie> list() {
        return null;
    }

    ;
}
