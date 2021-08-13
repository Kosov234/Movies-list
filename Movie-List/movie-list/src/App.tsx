import React from "react";
import Picasso from "@toptal/picasso-provider";
import { Page, Container, Typography } from "@toptal/picasso";
import TopBar from "./components/TopBar";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  return (
    <Picasso>
      <Page>
        <TopBar />
        <Page.Content>
          <Page.Article>
            <MoviesList />
          </Page.Article>
        </Page.Content>
        <Page.Footer />
      </Page>
    </Picasso>
  );
}

export default App;
