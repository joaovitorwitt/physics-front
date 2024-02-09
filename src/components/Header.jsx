import "../assets/css/Header.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/physics-platform-logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  return (
    <>
      <header>
        <div className="page-glow"></div>
        <div className="header">
          <nav className="navbar">
            <div className="navbar-actions">
              <Link to={"/"}>
                <div className="logo-wrapper">
                  <img src={Logo} alt="logo" className="logo" />
                </div>
              </Link>
              <ul className="navbar-list">
                <li className="navbar-link">
                  <Link className="link-item">About</Link>
                </li>

                <li className="navbar-link">
                  <Link className="link-item">Explore</Link>
                </li>

                <li className="navbar-link">
                  <Link className="link-item">Simulations</Link>
                </li>

                <li className="navbar-link">
                  <Link className="link-item">Simulations</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-cta">
              <Link>
                <button className="get-started-btn">Get Started</button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
