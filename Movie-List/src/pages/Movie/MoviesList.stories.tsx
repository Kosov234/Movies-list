import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import MoviesList from "../../components/MoviesList/MoviesList";
import IMovie from "../../Types/IMovie";

export default {
  title: "MoviesList",
  component: MoviesList,
} as Meta;

const defaultProps = {
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
  ],
};

const Template: Story<ComponentProps<typeof MoviesList>> = (args) => (
  <MoviesList {...args} />
);

export const Default = Template.bind({});
Default.args = defaultProps;

export const LongMovieName = Template.bind({});
LongMovieName.args = {
  ...defaultProps,
  movies: [
    {
      ...defaultProps.movies[0],
      Title: "Really Really long name of a Matrix movie",
    },
  ],
};

export const NoMoviePoster = Template.bind({});
NoMoviePoster.args = {
  ...defaultProps,
  movies: [
    {
      ...defaultProps.movies[1],
      Poster: "N/A",
    },
  ],
};
