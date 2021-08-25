import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import MoviesList from "../components/MoviesList";

export default {
  title: "MoviesList",
  component: MoviesList,
} as Meta;

const Template: Story<ComponentProps<typeof MoviesList>> = (args) => (
  <MoviesList {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  movies: [
    {
      Title: "The Matrix",
      Year: "1999",
      imdbID: "tt0133093",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      Title: "The Matrix Reloaded",
      Year: "2003",
      imdbID: "tt0234215",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      Title: "The Matrix Revolutions",
      Year: "2003",
      imdbID: "tt0242653",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Matrix Revisited",
      Year: "2001",
      imdbID: "tt0295432",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTkzNjg3NjE4N15BMl5BanBnXkFtZTgwNTc3NTAwNzE@._V1_SX300.jpg",
    },
    {
      Title: "Enter the Matrix",
      Year: "2003",
      imdbID: "tt0277828",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWM3MDU2MWQtYjdlNC00NDBlLTkyNGMtNjdhYjdlNTdiNTFlXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg",
    },
    {
      Title: "The Matrix: Path of Neo",
      Year: "2005",
      imdbID: "tt0451118",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGFiNGU4MjEtODM2ZC00OTg0LThkNmEtZTBlN2FkMmFjOWYzXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg",
    },
    {
      Title: "A Glitch in the Matrix",
      Year: "2021",
      imdbID: "tt9847360",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMWRhNGY3NGQtMDAxMS00YjY2LTgzOTUtZjljZmUyYWQwMGI2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    },
    {
      Title: "Armitage III: Dual Matrix",
      Year: "2002",
      imdbID: "tt0303678",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTUwOTY3Mjg1MF5BMl5BanBnXkFtZTcwODI2MTAyMQ@@._V1_SX300.jpg",
    },
    {
      Title: "CR: Enter the Matrix",
      Year: "2009",
      imdbID: "tt1675286",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTExMzY3NTQ1NjleQTJeQWpwZ15BbWU3MDAyMjk2NzM@._V1_SX300.jpg",
    },
    {
      Title: "Sex and the Matrix",
      Year: "2000",
      imdbID: "tt0274085",
      Type: "movie",
      Poster: "N/A",
    },
  ],
};
