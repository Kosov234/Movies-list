import React, { createContext, useReducer } from "react";
import axios from "axios";

type AppState = typeof initialState;
type Action = { type: "SEARCH_MOVIES"; payload: [] };

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MoviesProviderProps {
  children: React.ReactNode;
}

const initialState = {
  movies: Array<Movie>(),
};

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "SEARCH_MOVIES":
      return {
        movies: action.payload,
      };
    default:
      return state;
  }
};

const MoviesContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

function MoviesProvider({ children }: MoviesProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MoviesContext.Provider value={{ state, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
}

export { MoviesContext, MoviesProvider };
