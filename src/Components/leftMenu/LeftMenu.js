import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Sass/styles/leftMenu.scss";
import Logo from "../logo/Logo";
import Social from "../social/Social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuItems from "./MenuItems";

const burgerMenu = <FontAwesomeIcon icon={faBars} size="3x" />;

const LeftMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const sidebarClasses = showMenu ? "left-menu" : "left-menu sidebar-hidden";
  const toggleMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <React.Fragment>
      {!showMenu && (
        <div className="burger-menu">
          <button onClick={toggleMenuHandler}>{burgerMenu}</button>
        </div>
      )}
      {showMenu && <div className="backdrop" onClick={toggleMenuHandler}></div>}
      <div className={sidebarClasses}>
        <div className="logo">
          <Link to="/">
            <Logo classNames={"logo-sidebar"} />
          </Link>
        </div>
        <MenuItems />
        <div className="social">
          <Social />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftMenu;
