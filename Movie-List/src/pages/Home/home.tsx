import React, { useState } from "react";
import { Container, Link, Page, Search16 } from "@toptal/picasso";
import { Form } from "@toptal/picasso-forms";
import { Link as RouterLink } from "react-router-dom";
import MoviesList from "../../components/MoviesList/MoviesList";
import axios from "axios";
import IFormValues from "../../Types/IFormValues";
import MoviesListLoader from "../../components/MoviesList/moviesListLoader";
import { Grid } from "@toptal/picasso/Grid/Grid";
import IServerResponse from "../../Types/IServerResponse";

const HomePage: React.FunctionComponent<{}> = () => {
  const [moviesList, setMoviesList] = useState<IServerResponse>();
  const [loading, setLoading] = useState(false);

  const onSubmit = (formValues: IFormValues) => {
    const { movieTitle } = formValues;

    setLoading(true);

    axios
      .get(`https://www.omdbapi.com/?apikey=626b9ad2&s=${movieTitle}`)
      .then((response) => {
        setMoviesList(response.data);
        setLoading(false);
      });
  };

  return (
    <Page>
      <Page.TopBar
        title="Movie List"
        leftContent={
          <Container left="large">
            <Form onSubmit={onSubmit}>
              <Form.Input
                name="movieTitle"
                icon={<Search16 />}
                placeholder="Search..."
              />
            </Form>
          </Container>
        }
        rightContent={
          <Container>
            <Link
              color="white"
              underline="none"
              as={RouterLink}
              to="/"
              style={{ margin: "15px" }}
            >
              Home
            </Link>
            <Link
              color="white"
              underline="none"
              as={RouterLink}
              to="/advanced_search"
              style={{ margin: "15px" }}
            >
              Advanced Search
            </Link>
          </Container>
        }
      />
      <Page.Content>
        <Container padded={"xsmall"}>
          <Grid justifyContent="center" wrap="wrap" spacing={8}>
            {loading ? (
              <MoviesListLoader />
            ) : moviesList && moviesList.Response === "False" ? (
              "Movies not found"
            ) : (
              moviesList && <MoviesList movies={moviesList.Search} />
            )}
          </Grid>
        </Container>
      </Page.Content>
      <Page.Footer />
    </Page>
  );
};

export default HomePage;
