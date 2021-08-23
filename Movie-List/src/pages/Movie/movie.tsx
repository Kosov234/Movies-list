import React, { useState, useEffect } from "react";
import { Page, Image, Container, Typography, Grid } from "@toptal/picasso";
import TopBar from "../../Components/TopBar/TopBar";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";
import IMovie from "../../Types/IMovie";
import MovieLoader from "./movieLoader";

type MoviePageParams = { imdbID: string };

function MoviePage({ match }: RouteComponentProps<MoviePageParams>) {
  const [currentMovie, setCurrentMovie] = useState<IMovie>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://www.omdbapi.com/?apikey=626b9ad2&i=${match.params.imdbID}`)
      .then((response) => {
        setCurrentMovie(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <Page>
      <TopBar />
      <Page.Content>
        {loading ? (
          <MovieLoader />
        ) : currentMovie && currentMovie.Response === "False" ? (
          "Movie not found"
        ) : (
          currentMovie && <MovieInfo movie={currentMovie} />
        )}
      </Page.Content>
      <Page.Footer />
    </Page>
  );
}

interface MovieInfoProps {
  movie: IMovie;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
  const {
    Poster,
    Title,
    Genre,
    Released,
    imdbRating,
    Actors,
    Plot,
    Type,
    DVD,
    BoxOffice,
    totalSeasons,
  } = movie;
  return (
    <Grid justifyContent="center" alignItems="center" spacing={0}>
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
              Poster === "N/A"
                ? "https://raw.githubusercontent.com/Kosov234/Movie-app/main/images/no_image.png"
                : Poster
            }
            style={{ width: "350px", height: "500px" }}
          />
        </Container>
      </Grid.Item>
      <Grid.Item small={4}>
        <Container padded="small">
          <Typography size="xlarge" variant="heading" align="left">
            {Title}
          </Typography>
          <Typography size="large">{Genre}</Typography>
          <Typography size="medium">
            Release Date: {Released}
            <br />
            IMDB Rating: {imdbRating}
            <br />
            Actors: {Actors}
          </Typography>
        </Container>
        <Container padded="small" top="xlarge">
          <Typography size="large">{Plot}</Typography>
        </Container>
        <Container padded="small" top="xlarge">
          {Type === "movie" ? (
            <Typography size="large">
              DVD Release: {DVD} <br />
              Box Office: {BoxOffice}
            </Typography>
          ) : (
            <Typography size="large">Total Seasons: {totalSeasons}</Typography>
          )}
        </Container>
      </Grid.Item>
    </Grid>
  );
};

export default MoviePage;
