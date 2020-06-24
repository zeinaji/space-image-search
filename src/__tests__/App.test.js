import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  render(<App />);
  xit("it renders correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("it renders the logo", () => {
    expect(screen.getByAltText("logo")).toHaveClass("nasa-logo");
  });
});
