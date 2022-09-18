import React, { useState } from "react";
import "../../Sass/styles/leftMenu.scss";
import Logo from "../logo/Logo";
import Social from "../social/Social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faBagShopping,
  faHeadset,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
const foods = <FontAwesomeIcon icon={faUtensils} size="xl" />;
const bag = <FontAwesomeIcon icon={faBagShopping} size="xl" />;
const contact = <FontAwesomeIcon icon={faHeadset} size="xl" />;
const user = <FontAwesomeIcon icon={faUser} size="2x" />;
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
          <Logo classNames={"logo-sidebar"} />
        </div>
        <div className="menu">
          <ul>
            <li>
              <span>{foods}</span> Menu
            </li>
            <li>
              {" "}
              <span>{bag}</span> Cart
            </li>
            <li>
              {" "}
              <span>{contact}</span> contact
            </li>
            <li className="user">
              {user} <span>user</span>
            </li>
          </ul>
        </div>
        <div className="social">
          <Social />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftMenu;
