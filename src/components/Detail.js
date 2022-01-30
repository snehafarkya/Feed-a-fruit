import React from "react";

import Apple from "./Apple";
import Mango from "./Mango";
import Watermelon from "./Watermelon";
import Orange from "./Orange";
import Banana from "./Banana";
import Graps from "./Graps";

function Detail() {
  return (
    <>
      <h2> List of <span id="span">fruits</span> </h2>

      <h3>
        <ul className="list">
          <div className="div">
            <li style={{ color: "white" }}>Apple</li>
            <Origin originn="Europe" />
            <Apple />
          </div>
          <div className="div">
            <li style={{ color: "white" }}>Mango</li>
            <Origin originn="India" />
            <Mango />
          </div>
          <div className="div">
            <li style={{ color: "white" }}>Watermelon</li>
            <Origin originn="Africa" />
            <Watermelon />
          </div>
          <div className="div">
            <li style={{ color: "white" }}>Orange </li>
            <Origin originn="Southeast Asia" />
            <Orange />
          </div>
          <div className="div">
            <li style={{ color: "white" }}>Banana</li>
            <Origin originn="Southeast Asia" />
            <Banana />
          </div>
          <div className="div">
            <li style={{ color: "white" }}>Grapes </li>
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

export default Detail;
