import React from "react";

import Clock from "./Clock";
import Apple from "./Apple";
import Mango from "./Mango";
import Watermelon from "./Watermelon";
import Orange from "./Orange";
import Banana from "./Banana";
import Graps from "./Graps";

import HeroImage from "./Rectangle.png";

export default function Home() {
  return (
    <>
      <div className="homi">
        <h1 className="titl">
          Let's live a <br />{" "}
          <span id="span"> healthy life by proper intake of fruits </span> 🍉!!
        </h1>
        <img id="img" src={HeroImage} alt="imahge" />
      </div>
      <div className="divv">
        <Clock />
      </div>
      <h2>
        {" "}
        List of <span id="span">fruits</span>{" "}
      </h2>

      <h3>
        <ul className="list">
          <div className="div">
            <li style={{ color: "#3D8952" }}>Apple</li>
            <Origin originn="Europe" />

            <Apple />
          </div>
          <div className="div">
            <li style={{ color: "#3D8952" }}>Mango</li>
            <Origin originn="India" />
            <Mango />
          </div>
          <div className="div">
            <li style={{ color: "#3D8952" }}>Watermelon</li>
            <Origin originn="Africa" />
            <Watermelon />
          </div>
          <div className="div">
            <li style={{ color: "#3D8952" }}>Orange </li>
            <Origin originn="Southeast Asia" />
            <Orange />
          </div>
          <div className="div">
            <li style={{ color: "#3D8952" }}>Banana</li>
            <Origin originn="Southeast Asia" />
            <Banana />
          </div>
          <div className="div">
            <li style={{ color: "#3D8952" }}>Grapes </li>
            <Origin originn="North America" />
            <Graps />
          </div>
        </ul>
      </h3>
    </>
  );
}

const Origin = (props) => {
  return <h4>{props.originn}</h4>;
};
