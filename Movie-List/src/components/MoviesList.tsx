import { Image, Grid } from "@toptal/picasso";
import React from "react";
import IMovie from "../interfaces/movie";
import { Link as RouterLink } from "react-router-dom";

interface MoviesListProps {
  movies: IMovie[];
}

function MoviesList({ movies }: MoviesListProps) {
  return (
    <Grid justifyContent="center" wrap="wrap">
      {movies.map((movie: IMovie) => {
        return (
          <Grid.Item small={3} key={movie.imdbID}>
            <RouterLink to={`/movies/${movie.imdbID}`}>
              <Image
                alt="Default image"
                src={movie.Poster}
                style={{ height: "450px", width: "300px" }}
              />
            </RouterLink>
            <h4>
              {movie.Title.length < 33
                ? movie.Title
                : movie.Title.slice(0, 33) + "..."}
            </h4>
          </Grid.Item>
        );
      })}
    </Grid>
  );
}

export default MoviesList;
