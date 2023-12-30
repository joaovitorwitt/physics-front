import "../assets/css/Hero.css";

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="black-hole-wrapper">
        <div className="doppler-beaming"></div>
        <div className="photon-ring"></div>
        <div className="accretion-disk"></div>
        <div className="backdrop"></div>
        <div className="shadow"></div>
      </div>
      <div className="hero-cta">
        <h1 className="main-title">
          Elevate your physics knownledge to the next level
        </h1>
        <p className="main-description">Learn physics in the right way </p>
      </div>
    </div>
  );
}
