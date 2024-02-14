import "../assets/css/Hero.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/physics-platform-logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Hero() {
  // position a star at a random place inside the hero
  // after some time the star start to get suck by the black hole

  let randomLeftValue = (Math.random() * (90 - 10) + 10).toFixed(9);
  let randomTopValue = (Math.random() * (90 - 10) + 10).toFixed(9);

  return (
    <div className="header-hero">
      {/* BLACK HOLE */}
      <div className="hero-overflow">
        <div className="black-hole-wrapper">
          <div className="doppler-beaming"></div>
          <div className="photon-ring"></div>
          <div className="accretion-disk"></div>
          <div className="backdrop"></div>
          <div className="shadow"></div>
        </div>
      </div>
      {/* STARS ORBITING */}
      <div className="stars-overflow">
        {[...Array(50)].map((_, index) => {
          const randomLeftValue = (Math.random() * (90 - 10) + 10).toFixed(9);
          const randomTopValue = (Math.random() * (90 - 10) + 10).toFixed(9);

          return (
            <div
              key={index}
              className="star-animation"
              style={{ top: `${randomTopValue}%`, left: `${randomLeftValue}%` }}
            ></div>
          );
        })}
      </div>
      {/* HEADER */}
      <section className="header">
        <div className="page-glow"></div>
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
            </ul>
          </div>
          <div className="navbar-cta">
            <Link>
              <button className="get-started-btn">Get Started</button>
            </Link>
          </div>
        </nav>
      </section>

      {/* HERO */}
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-main">
            <h1 className="main-title">Changing the World With Physics</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
