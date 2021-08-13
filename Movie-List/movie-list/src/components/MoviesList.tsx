import React, { Fragment } from "react";
import { useContext } from "react";
import { MoviesContext, Movie } from "../context/moviesContext";
import { Container, Image } from "@toptal/picasso";

export default function MoviesList() {
  const { state, dispatch } = useContext(MoviesContext);

  return (
    <Fragment>
      {state.movies.map((movie: Movie) => {
        return (
          <Container left="small" inline key={movie.imdbID}>
            <Image
              alt="Circular image"
              src={movie.Poster}
              style={{ height: "450px", width: "300px" }}
            />
          </Container>
        );
      })}
    </Fragment>
  );
}
