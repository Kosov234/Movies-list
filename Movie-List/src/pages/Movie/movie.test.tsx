import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@toptal/picasso/test-utils";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import MoviePage from "./movie";
import MovieLoader from "./movieLoader";
import IMovie from "../../Types/IMovie";

jest.mock("axios");

const movieData = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  Title: "Matrix",
  Type: "movie",
  Year: "1999",
  imdbID: "tt0133093",
  Released: "31 Mar 1999",
  Genre: "Action, Sci-Fi",
  Director: "Lana Wachowski, Lilly Wachowski",
  Actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Mossg",
  Plot: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
  Language: "English",
  Awards: "Won 4 Oscars. 42 wins & 51 nominations total",
  imdbRating: "8.7",
  DVD: "01 Jan 2009",
  BoxOffice: "$171,479,930",
  totalSeasons: "Test string",
  Response: "True",
};

async function renderMovie(movie: IMovie) {
  axios.get.mockResolvedValueOnce({ data: movie });
  const props = {
    match: {
      params: {
        imdbID: "1",
      },
    },
  };

  await render(
    <MemoryRouter>
      <MoviePage {...props} />
    </MemoryRouter>
  );
}

describe("Movie Page", () => {
  describe("loading", () => {
    describe("when it is true", () => {
      it("render MovieLoader", () => {
        render(<MovieLoader />);

        expect(screen.getAllByTitle("Loading...")[0]).toBeInTheDocument();
      });
    });

    describe("when it is false", () => {
      describe("when movie with the requested imdbID does not exists", () => {
        it('renders "Movie not found" copy', async () => {
          await renderMovie({ ...movieData, Response: "False" });

          expect(screen.getByText("Movie not found")).toBeInTheDocument();
        });
      });

      describe("When the movie exists", () => {
        it("Renders the movie information correctly", async () => {
          await renderMovie(movieData);

          expect(screen.getByText(movieData.Title)).toBeInTheDocument();
          expect(
            screen.getByText(movieData.Released, { exact: false })
          ).toBeInTheDocument();
          expect(
            screen.getByText(movieData.imdbRating, { exact: false })
          ).toBeInTheDocument();
          expect(
            screen.getByText(movieData.Actors, { exact: false })
          ).toBeInTheDocument();
        });

        describe("Movie Image", () => {
          describe("when the Image exists", () => {
            it("renders correct Image inside the src prop", async () => {
              await renderMovie(movieData);

              expect(screen.getByAltText("Movie Image")).toHaveAttribute(
                "src",
                movieData.Poster
              );
            });
          });

          describe("when there is no Image", () => {
            it("renders correct placeholder", async () => {
              await renderMovie({ ...movieData, Poster: "N/A" });

              expect(screen.getByAltText("Movie Image")).toHaveAttribute(
                "src",
                "https://raw.githubusercontent.com/Kosov234/Movie-app/main/images/no_image.png"
              );
            });
          });
        });

        describe("omdb type", () => {
          describe("when the type is movie", () => {
            it("renders movie-specific fields", async () => {
              await renderMovie(movieData);

              expect(
                screen.getByText(movieData.DVD, { exact: false })
              ).toBeInTheDocument();
              expect(
                screen.getByText(movieData.BoxOffice, { exact: false })
              ).toBeInTheDocument();
            });
          });

          describe("when the type is not movie", () => {
            it("renders TV-Series specific fields", async () => {
              await renderMovie({ ...movieData, Type: "TV-Series" });

              expect(
                screen.getByText(movieData.totalSeasons, { exact: false })
              ).toBeInTheDocument();
            });
          });
        });
      });
    });
  });
});
