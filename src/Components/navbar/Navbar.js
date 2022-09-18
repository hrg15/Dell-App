import SearchBox from "../searchBox/SearchBox";
import "../../Sass/styles/navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const drop = <FontAwesomeIcon icon={faCaretDown} size="2xl" />;

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const dropdownHandler = () => {
    setToggleDropdown((prev) => !prev);
  };
  const navClasses = toggleDropdown ? "show-nav" : "hidden-nav";
  return (
    <div className="nav">
      <nav className={navClasses}>
        <a href="/pizza">Pizza</a>
        <a href="/burger">Burger</a>
        <a href="/organic">Organic</a>
      </nav>
      <button className="drop-down" onClick={dropdownHandler}>
        {drop}
      </button>
      <div className="search-box">
        <SearchBox />
      </div>
    </div>
  );
};
export default Navbar;
