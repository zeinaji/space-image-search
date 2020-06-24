import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  xit("it renders correctly", () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders input box", () => {
    render(<Search />);
    document.querySelector(".search-input").value = "mockValue";
    const inputValue = screen.getByDisplayValue("mockValue");

    expect(inputValue).toBeTruthy();
  });

  it("renders button", () => {
    render(<Search />);
    expect(screen.getByRole("button")).toHaveClass("submit");
  });
});
