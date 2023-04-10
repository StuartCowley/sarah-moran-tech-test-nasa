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

    render(<SearchResults results={results} />);

    expect(results.length).toBe(3);
  });
});
