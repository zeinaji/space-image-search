import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

afterEach(cleanup);

const results = ["mock1", "mock2", "mock3"];

describe("SearchResults", () => {
  xit("it renders correctly", () => {
    const { asFragment } = render(<SearchResults image="mockImage" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("it renders an image", () => {
    render(<SearchResults results={results} />);
    expect(screen.getAllByAltText("search-result").length).toBe(3);
  });

  it("renders error when no results", () => {
    render(<SearchResults results={[]} />);
    expect(screen.getByText("No results").closest("div")).toHaveClass(
      "search-image"
    );
  });
});
