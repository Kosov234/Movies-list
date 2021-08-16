import { useState } from "react";
import axios from "axios";
import { Input, Search16, Page, Container, Form, Link } from "@toptal/picasso";
import { Link as RouterLink } from "react-router-dom";

export default function TopBar() {
  return (
    <Page.TopBar
      title="Movie List"
      rightContent={
        <Container>
          <Link as={RouterLink} to="/">
            Home
          </Link>
          <Link as={RouterLink} to="/advanced_search">
            Advanced Search
          </Link>
        </Container>
      }
    />
  );
}
