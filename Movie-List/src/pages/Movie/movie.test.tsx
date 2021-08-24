import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@toptal/picasso/test-utils";
import App from "../../App";
import AdvancedSearch from "../AdvancedSearch/advancedSearch";

describe("Movie Page", () => {
  it("Renders the movie information correctly", () => {
    render(<AdvancedSearch />);

    screen.debug();
  });
});
