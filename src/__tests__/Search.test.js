import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <Search setSearchResults={validProps.setSearchResults} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the search input", () => {
    render(<Search setSearchResults={validProps.setSearchResults} />);

    const searchInput = screen.getByPlaceholderText("enter search");

    expect(searchInput).toBeInTheDocument();
  });

  it("renders the search button", () => {
    render(<Search setSearchResults={validProps.setSearchResults} />);

    const searchButton = screen.getByRole("button");

    expect(searchButton).toHaveTextContent("Go!");
  });
});
