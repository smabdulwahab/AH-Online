import React from "react";
import "./twoColumn.css";
import TwoCOLvid from "../../assets/twoCOLvid.gif";
export default function twoColumn() {
  return (
    <>
      <div className="mainCol">
        <div className="colOne">
          <h1>Complete Web Design & Development</h1>
          <p>
            Say goodbye to restless nights caused by counterproductive contacts
            between service providers, as well as overbilling nightmares for
            things you’re not sure you need but you’re sure you have to pay for.{" "}
          </p>
        </div>
        <div className="colTwo">
          <div className="colTwo">
            <img src={TwoCOLvid} alt="Animated GIF" />
          </div>
        </div>
      </div>
    </>
  );
}
