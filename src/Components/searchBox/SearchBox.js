import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../Sass/styles/searchBox.scss";

const search = <FontAwesomeIcon icon={faSearch} size="2x" />;
const SearchBox = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className="search-box" onSubmit={submitHandler}>
      <input type="text" placeholder="Search..." />
      <button>{search}</button>
    </form>
  );
};

export default SearchBox;
