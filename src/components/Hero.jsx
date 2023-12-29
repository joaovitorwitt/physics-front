import { useState } from "react";
import "../assets/css/Hero.css";
import { useEffect } from "react";

export default function Hero() {
  const [blackholeAlphaValue, setBlackholeAlphaValue] = useState(0.97);
  const [decreasingValue, setDecreasingValue] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (decreasingValue) {
        setBlackholeAlphaValue((prevAlpha) => prevAlpha - 0.01);

        if (blackholeAlphaValue <= 0.2) {
          setDecreasingValue(false);
        }
      } else {
        setBlackholeAlphaValue((prevAlpha) => prevAlpha + 0.01);

        if (blackholeAlphaValue >= 0.97) {
          setDecreasingValue(true);
        }
      }
    }, 35);

    return () => clearInterval(interval);
  }, [blackholeAlphaValue, decreasingValue]);

  return (
    <div className="hero-wrapper">
      <div
        className="black-hole-wrapper"
        // style={{
        //   boxShadow: `0px 2px 200px 12px rgba(8, 0, 230, ${blackholeAlphaValue})`,
        // }}
      >
        <div className="inner-blackhole"></div>
      </div>
      <h1 className="main-title">
        Elevate your physics knownledge to the next level
      </h1>
      <p className="main-description">Learn physics in the right way </p>
    </div>
  );
}
