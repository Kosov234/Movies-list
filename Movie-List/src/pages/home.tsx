import React, { useState } from "react";
import { Container, Form, Input, Link, Page, Search16 } from "@toptal/picasso";
import { Link as RouterLink } from "react-router-dom";
import MoviesList from "../components/MoviesList";
import IMovie from "../interfaces/movie";
import axios from "axios";

const HomePage: React.FunctionComponent<{}> = (props) => {
  const [value, setValue] = useState("");

  let moviesList: IMovie[] = [];

  const onChange = (e: any) => setValue(e.target.value);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = axios
      .get(`https://www.omdbapi.com/?apikey=626b9ad2&s=${value}`)
      .then((response) => {
        moviesList = response.data.Search;
        console.log(moviesList);
      });
  };

  return (
    <Page>
      <Page.TopBar
        title="Movie List"
        leftContent={
          <Container left="large">
            <Form onSubmit={onSubmit}>
              <Form.Field>
                <Input
                  icon={<Search16 />}
                  placeholder="Search..."
                  value={value}
                  onChange={onChange}
                />
              </Form.Field>
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
        <Page.Article>
          <MoviesList />
        </Page.Article>
      </Page.Content>
      <Page.Footer />
    </Page>
  );
};

export default HomePage;
