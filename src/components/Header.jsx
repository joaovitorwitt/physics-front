import "../assets/css/Header.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo192.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuActive((prevState) => !prevState);
    console.log(isMobileMenuActive);
  }

  return (
    <>
      <header className="header">
        <nav className="navbar container">
          <div className="navbar-logo">
            <img src={Logo} alt="" />
          </div>

          {/* <ul className="navbar-links">
            <li>
              <Link className="navbar-item" to={"/"}>
                About
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to={"/"}>
                Author
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to={"/"}>
                Company
              </Link>
            </li>
          </ul> */}

          <div className="navbar-actions">
            <Link to={"/register"}>
              <button className="btn signup-btn">Sign Up</button>
            </Link>
            <Link to={"/login"}>
              <button className="btn login-btn">Login</button>
            </Link>
            <button className="display-navbar-menu" onClick={toggleMobileMenu}>
              {/* if mobile menu is active change the icon to the close */}
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          <div
            className={`navbar-mobile-menu ${
              isMobileMenuActive ? "active" : ""
            }`}
          >
            <ul>
              <li>
                <Link to={"/"} className="navbar-item-mobile">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/"} className="navbar-item-mobile">
                  Features
                </Link>
              </li>
              <li>
                <Link to={"/"} className="navbar-item-mobile">
                  Stuff
                </Link>
              </li>
              <li>
                <Link to={"/"} className="navbar-item-mobile">
                  Stuff
                </Link>
              </li>
              <li>
                <Link to={"/"} className="navbar-item-mobile">
                  Stuff
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
