import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ searched, results }) => {
  if (!searched) return null;
  if (!results.length) {
    return <p className="no-results">No Results</p>;
  } else {
    return (
      <>
        <div className="image-gallery">
          {results.map((image) => (
            <img
              className="card-image"
              src={image}
              alt="requested-result"
              key={image}
            />
          ))}
        </div>
      </>
    );
  }
};

export default SearchResults;
