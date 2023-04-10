import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults results={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders results", () => {
    const results = ["image1", "image2", "image3"];
    const { asFragment } = render(<SearchResults results={results} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders images if there are results", () => {
    const results = ["image1", "image2", "image3"];
    const searched = true;
    render(<SearchResults results={results} searched={searched} />);
    const imageResults = screen.queryAllByAltText("requested-result");

    expect(imageResults.length).toBe(3);
  });

  it("renders no results text if there are no results", () => {
    render(<SearchResults results={[]} searched={true} />);
    const noResults = screen.getByText("No Results");

    expect(noResults).toBeInTheDocument();
  });
});
