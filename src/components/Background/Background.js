import React from "react";
import "./Background.css";
import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

export default function Background({ playStatus, heroCount }) {
  return (
    <>
      {playStatus ? (
        <video className="background fade-in" autoPlay loop muted>
          <source src={video1} type="video/mp4" />
        </video>
      ) : (
        <img
          src={heroCount === 0 ? image1 : heroCount === 1 ? image2 : image3}
          className="background fade-in"
          alt="Background"
        />
      )}
      <div className="overlay"></div>
    </>
  );
}
