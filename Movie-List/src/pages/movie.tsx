import React, { useState, useEffect } from "react";
import { Page, Image, Container, Typography, Grid } from "@toptal/picasso";
import TopBar from "../components/TopBar";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";
import IMovie from "../interfaces/movie";

type MoviePageParams = { imdbID: string };

function MoviePage({ match }: RouteComponentProps<MoviePageParams>) {
  const [currentMovie, setCurrentMovie] = useState<IMovie | undefined>(
    undefined
  );

  useEffect(() => {
    const data = axios
      .get(`https://www.omdbapi.com/?apikey=626b9ad2&i=${match.params.imdbID}`)
      .then((response) => {
        setCurrentMovie(response.data);
      });
  }, []);

  return (
    <Page>
      <TopBar />
      <Page.Content>
        <Grid justifyContent="center" spacing={0}>
          <Grid.Item small={4}>
            <Container
              padded="small"
              flex={true}
              justifyContent="center"
              alignItems="center"
            >
              <Image
                alt="Default image"
                src={
                  currentMovie?.Poster === undefined ? "" : currentMovie.Poster
                }
                style={{ width: "350px", height: "500px" }}
              />
            </Container>
          </Grid.Item>
          <Grid.Item small={4}>
            <Container padded="small">
              <Typography size="xlarge" variant="heading" align="left">
                {currentMovie?.Title}
              </Typography>
              <Typography size="large">{currentMovie?.Genre}</Typography>
              <Typography size="medium">
                Release Date: {currentMovie?.Released}
                <br />
                IMDB Rating: {currentMovie?.imdbRating}
                <br />
                Actors: {currentMovie?.Actors}
              </Typography>
            </Container>
            <Container padded="small" top="xlarge">
              <Typography size="large">{currentMovie?.Plot}</Typography>
            </Container>
            <Container padded="small" top="xlarge">
              {currentMovie?.Type === "movie" ? (
                <Typography size="large">
                  DVD Release: {currentMovie?.DVD} <br />
                  Box Office: {currentMovie?.BoxOffice}
                </Typography>
              ) : (
                <Typography size="large">
                  Total Seasons: {currentMovie?.totalSeasons}
                </Typography>
              )}
            </Container>
          </Grid.Item>
        </Grid>
      </Page.Content>
      <Page.Footer />
    </Page>
  );
}

export default MoviePage;
