import React from "react";
import { Page } from "@toptal/picasso";
import TopBar from "../components/TopBar";

const MoviePage: React.FunctionComponent<{}> = (props) => {
  return (
    <Page>
      <TopBar />
      <Page.Content>
        <Page.Article>This is Movie page.</Page.Article>
      </Page.Content>
      <Page.Footer />
    </Page>
  );
};

export default MoviePage;
