package com.mycompany.bluraystore.controller;

import com.mycompany.bluraystore.entity.Movie;
import com.mycompany.bluraystore.service.MovieServiceInterface;
import org.springframework.stereotype.Controller;

import java.util.Scanner;
@Controller
public class MovieController {
    private MovieServiceInterface service;

    public void addUsingCode(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Titre du film : ");
        String title = scanner.nextLine();
        System.out.println("Genre du film : ");
        String genre = scanner.nextLine();

        Movie movie = new Movie();
        movie.setGenre(genre);
        movie.setTitle(title);

        service.registerMovie(movie);

        System.out.println("Vous avez enregistré le film " + movie.getTitle() + " de genre " + movie.getGenre());
    }

    public MovieServiceInterface getService() {
        return service;
    }

    public void setService(MovieServiceInterface service) {
        this.service = service;
    }
}
