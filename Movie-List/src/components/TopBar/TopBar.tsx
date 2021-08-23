import { Page, Container, Link } from "@toptal/picasso";
import { Link as RouterLink } from "react-router-dom";

export default function TopBar() {
  return (
    <Page.TopBar
      title="Movie List"
      rightContent={
        <Container>
          <Link
            color="white"
            underline="none"
            as={RouterLink}
            to="/"
            style={{ margin: "15px" }}
          >
            Home
          </Link>
          <Link
            color="white"
            underline="none"
            as={RouterLink}
            to="/advanced_search"
            style={{ margin: "15px" }}
          >
            Advanced Search
          </Link>
        </Container>
      }
    />
  );
}
