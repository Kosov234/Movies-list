import React, { useState } from "react";
import { Page, Container, Search16, Grid } from "@toptal/picasso";
import { Form } from "@toptal/picasso-forms";
import axios from "axios";
import IFormValues from "../../Types/IFormValues";
import IServerResponse from "../../Types/IServerResponse";
import TopBar from "../../components/TopBar";
import MoviesList from "../../components/MoviesList";
import MoviesListLoader from "../../components/MoviesList/moviesListLoader";

const AdvancedSearch: React.FunctionComponent<{}> = (props) => {
  const [moviesList, setMoviesList] = useState<IServerResponse>();
  const [loading, setLoading] = useState(false);

  const onSubmit = (formValues: IFormValues) => {
    setLoading(true);

    const { movieTitle, movieYear } = formValues;

    axios
      .get(
        `https://www.omdbapi.com/?apikey=626b9ad2&s=${movieTitle}&y=${movieYear}`
      )
      .then((response) => {
        setMoviesList(response.data);
        setLoading(false);
      });
  };

  return (
    <Page>
      <TopBar />
      <Page.Content>
        <Page.Article>
          <Container left="large" padded="small" justifyContent="center">
            <Form onSubmit={onSubmit}>
              <Form.Input
                name="movieTitle"
                label="Movie Title:"
                icon={<Search16 />}
                placeholder="Search..."
                width="full"
              />
              <Form.Input
                name="movieYear"
                label="Movie Year:"
                icon={<Search16 />}
                placeholder="Search..."
                width="full"
              />
              <Container top="small">
                <Form.SubmitButton>Submit</Form.SubmitButton>
              </Container>
            </Form>
          </Container>
          <Container>
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
        </Page.Article>
      </Page.Content>
      <Page.Footer />
    </Page>
  );
};

export default AdvancedSearch;
