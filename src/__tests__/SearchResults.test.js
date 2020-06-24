import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  render(<SearchResults />);
  xit("it renders correctly", () => {
    const { asFragment } = render(<SearchResults image="mockImage" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("it renders an image", () => {
    expect(screen.getByAltText("search-result")).toHaveClass("search-image");
  });
});
