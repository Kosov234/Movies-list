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

export const Default = Template.bind({});
Default.args = {
  movies: [
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Captain America: Civil War",
      Year: "2016",
      imdbID: "tt3498820",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
    },
    {
      Title: "World War Z",
      Year: "2013",
      imdbID: "tt0816711",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    },
    {
      Title: "War of the Worlds",
      Year: "2005",
      imdbID: "tt0407304",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "War for the Planet of the Apes",
      Year: "2017",
      imdbID: "tt3450958",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg",
    },
    {
      Title: "War Dogs",
      Year: "2016",
      imdbID: "tt2005151",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjEyNzQ0NzM4MV5BMl5BanBnXkFtZTgwMDI0ODM2OTE@._V1_SX300.jpg",
    },
    {
      Title: "This Means War",
      Year: "2012",
      imdbID: "tt1596350",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYyOTQ4MDE2MV5BMl5BanBnXkFtZTcwOTE0MTgwNw@@._V1_SX300.jpg",
    },
    {
      Title: "War Horse",
      Year: "2011",
      imdbID: "tt1568911",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjExNzkxOTYyNl5BMl5BanBnXkFtZTcwODA0MjU4Ng@@._V1_SX300.jpg",
    },
    {
      Title: "The Tomorrow War",
      Year: "2021",
      imdbID: "tt9777666",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
  ],
};

export const LongMovieName = Template.bind({});
LongMovieName.args = {
  movies: [
    {
      Title: "Sweeney Todd: The Demon Barber of Fleet Street",
      Year: "2007",
      imdbID: "tt0408236",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTg3NjUxMzM5NV5BMl5BanBnXkFtZTcwMzQ1NjQzMw@@._V1_SX300.jpg",
    },
    {
      Title: "The Sweeney",
      Year: "2012",
      imdbID: "tt0857190",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTQwNDAzODYwMF5BMl5BanBnXkFtZTcwMTIxMDk5OA@@._V1_SX300.jpg",
    },
    {
      Title: "Sweeney Todd: The Demon Barber of Fleet Street",
      Year: "1982",
      imdbID: "tt0084747",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTk2ZTkwOWEtY2I2YS00MDU1LThjZTAtMmYwYTdkYTMzZTM2L2ltYWdlXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
    },
    {
      Title: "Sweeney Todd: The Demon Barber of Fleet Street",
      Year: "1936",
      imdbID: "tt0028331",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODk1ODk4MGMtNmI0Yy00ODA5LThmOGItNjU3NjljY2MwN2M2XkEyXkFqcGdeQXVyMDY4MzkyNw@@._V1_SX300.jpg",
    },
    {
      Title: "Sweeney Todd: The Demon Barber of Fleet Street in Concert",
      Year: "2001",
      imdbID: "tt0300536",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTkzNTczODczNF5BMl5BanBnXkFtZTcwNjEwNDIyMQ@@._V1_SX300.jpg",
    },
  ],
};

export const NoMoviePoster = Template.bind({});
NoMoviePoster.args = {
  movies: [
    {
      Title: "The Matrix",
      Year: "1999",
      imdbID: "tt0133093",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "The Matrix Reloaded",
      Year: "2003",
      imdbID: "tt0234215",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "The Matrix Revolutions",
      Year: "2003",
      imdbID: "tt0242653",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "The Matrix Revisited",
      Year: "2001",
      imdbID: "tt0295432",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "Enter the Matrix",
      Year: "2003",
      imdbID: "tt0277828",
      Type: "game",
      Poster: "N/A",
    },
    {
      Title: "The Matrix: Path of Neo",
      Year: "2005",
      imdbID: "tt0451118",
      Type: "game",
      Poster: "N/A",
    },
    {
      Title: "A Glitch in the Matrix",
      Year: "2021",
      imdbID: "tt9847360",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "Armitage III: Dual Matrix",
      Year: "2002",
      imdbID: "tt0303678",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "CR: Enter the Matrix",
      Year: "2009",
      imdbID: "tt1675286",
      Type: "game",
      Poster: "N/A",
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
