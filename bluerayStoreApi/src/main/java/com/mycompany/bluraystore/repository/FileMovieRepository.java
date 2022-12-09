package com.mycompany.bluraystore.repository;

import com.mycompany.bluraystore.entity.Movie;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class FileMovieRepository implements MovieRepositoryInterface {
    @Value("movies.file.location")
    private File file;

    public void add(Movie movie){
        FileWriter writer;
        try{
            writer = new FileWriter(file,true);
            String title = movie.getTitle();
            String genre = movie.getGenre();
            writer.write(title + ";" + genre + "\n");
            writer.close();
        }
        catch (IOException e){
            e.printStackTrace();
        }
    }

    @Override
    public List<Movie> list() {
        List<Movie> movies = new ArrayList<>();

        try(BufferedReader br = new BufferedReader(new FileReader(file))){
            for(String line; (line = br.readLine()) != null;) {
                final Movie movie = new Movie();
                final String[] titreEtGenre = line.split("\\;");
                movie.setTitle(titreEtGenre[0]);
                movie.setGenre(titreEtGenre[1]);
                movies.add(movie);
            }
        } catch (FileNotFoundException e){
            e.printStackTrace();
        } catch (IOException e){
            e.printStackTrace();
        }
    return movies;

    }


}
