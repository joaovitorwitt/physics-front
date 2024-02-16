import "../assets/css/Hero.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/physics-platform-logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Hero() {
  const [stars, setStars] = useState([]);
  useEffect(() => {
    const newStars = Array.from({ length: 100 }, (_, index) => {
      const randomAnimationDuration = (Math.random() * (11 - 4) + 4).toFixed(2);
      const randomAnimationDelay = (Math.random() * (5 - 1) + 1).toFixed(2);
      const randomLeftValue = (Math.random() * (90 - 10) + 10).toFixed(9);
      const randomTopValue = (Math.random() * (90 - 10) + 10).toFixed(9);
      return {
        id: index,
        left: randomLeftValue,
        top: randomTopValue,
        randomAnimationDuration,
        randomAnimationDelay,
      };
    });
    setStars(newStars);
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const star = newStars[0];
    const dx = centerX - (star.left / 100) * window.innerWidth;
    const dy = centerY - (star.top / 100) * window.innerHeight;
    document.documentElement.style.setProperty("--translate-x", `${dx}px`);
    document.documentElement.style.setProperty("--translate-y", `${dy}px`);
  }, []);

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
        {stars.map((star) => (
          <div
            key={star.id}
            className="star-animation"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDuration: `${star.randomAnimationDuration}s`,
              animationDelay: `${star.randomAnimationDelay}s`,
            }}
          ></div>
        ))}
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
