import React from "react";

import Clock from "./Clock";

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
      
    </>
  );
}

const Origin = (props) => {
  return <h4>{props.originn}</h4>;
};
