import { Image, Grid } from "@toptal/picasso";
import React, { Fragment } from "react";
import IMovie from "../../Types/IMovie";
import { Link as RouterLink } from "react-router-dom";

interface MoviesListProps {
  movies: IMovie[];
}

function MoviesList({ movies }: MoviesListProps) {
  return (
    <Fragment>
      {movies.map((movie: IMovie) => {
        return (
          <Grid.Item small={3} key={movie.imdbID}>
            <RouterLink to={`/movies/${movie.imdbID}`}>
              <Image
                alt="Default image"
                src={
                  movie.Poster === "N/A"
                    ? "https://raw.githubusercontent.com/Kosov234/Movie-app/main/images/no_image.png"
                    : movie.Poster
                }
                style={{ height: "450px", width: "100%" }}
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
    </Fragment>
  );
}

export default MoviesList;
