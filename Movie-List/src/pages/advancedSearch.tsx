import React from "react";
import { Page } from "@toptal/picasso";
import TopBar from "../components/TopBar";

const AdvancedSearch: React.FunctionComponent<{}> = (props) => {
  return (
    <Page>
      <TopBar />
      <Page.Content>
        <Page.Article>This is Advanced Search Page</Page.Article>
      </Page.Content>
      <Page.Footer />
    </Page>
  );
};

export default AdvancedSearch;
