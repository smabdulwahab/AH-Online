import React from "react";
import "./Hero.css";
import Background from "../Background/Background";
import aero from "../../assets/aero.png";
import Play from "../../assets/Play.png";
import pause from "../../assets/Pause.png";
export default function Hero({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) {
  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <div className="hero" id="home">
        <div className="hero-text">
          <p>{heroData.text1}</p>
          <p>{heroData.text2}</p>
        </div>
        <div className="hero-explore">
          <p>Build the Future </p>
          <a href="info@ahonline.tech">
            <img src={aero} alt="" />
          </a>
        </div>
        <div className="hero-dot-play">
          <ul className="hero-dots">
            <li
              onClick={() => setHeroCount(0)}
              className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
            ></li>
            <li
              onClick={() => setHeroCount(1)}
              className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
            ></li>
            <li
              onClick={() => setHeroCount(2)}
              className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
            ></li>
          </ul>
          <div className="hero-play">
            <img
              onClick={() => setPlayStatus(!playStatus)}
              src={playStatus ? pause : Play}
              alt=""
            />
            <p>See the video</p>
          </div>
        </div>
      </div>
    </>
  );
}
