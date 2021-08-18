import React, { useState } from "react";
import { Page, Container, Search16 } from "@toptal/picasso";
import { Form } from "@toptal/picasso-forms";
import TopBar from "../components/TopBar";
import axios from "axios";
import MoviesList from "../components/MoviesList";

const AdvancedSearch: React.FunctionComponent<{}> = (props) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [moviesList, setMoviesList] = useState([]);

  const onChangeMovieTitle = (e: any) => setMovieTitle(e.target.value);

  const onChangeMovieYear = (e: any) => setMovieYear(e.target.value);

  const onSubmit = (e: any) => {
    axios
      .get(
        `https://www.omdbapi.com/?apikey=626b9ad2&s=${e.movieTitle}&y=${e.movieYear}`
      )
      .then((response) => {
        setMoviesList(response.data.Search);
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
            <MoviesList movies={moviesList} />
          </Container>
        </Page.Article>
      </Page.Content>
      <Page.Footer />
    </Page>
  );
};

export default AdvancedSearch;
