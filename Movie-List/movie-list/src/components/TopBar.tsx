import { useState, useContext } from "react";
import axios from "axios";
import { Input, Search16, Page, Container, Form } from "@toptal/picasso";
import { MoviesContext } from "../context/moviesContext";

export default function TopBar() {
  const [value, setValue] = useState("");
  const { state, dispatch } = useContext(MoviesContext);

  const onChange = (e: any) => setValue(e.target.value);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = axios
      .get(`https://www.omdbapi.com/?apikey=626b9ad2&s=${value}`)
      .then((response) => {
        dispatch({ type: "SEARCH_MOVIES", payload: response.data.Search });
      });
  };

  return (
    <Page.TopBar
      title="Movie List"
      rightContent={
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
    />
  );
}
