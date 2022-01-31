import React from "react";
import { Link } from "react-router-dom";
import image from "./image18.png";
function Navbar() {
  return (
    <div className="navbar">
      <div id="logo">
        <img id="logoo" src={image} alt="efe" height={140} />
        <span className="feed">Feed A Fruit</span>
      </div>
      <ul id="ul">
        <li className="li"> <Link to="/"> Home</Link></li>
        <li className="li">
          <Link to="/detail"> Details</Link>
        </li>
        <li className="li"><Link to="/recipe"> Recipes</Link></li>
        <li className="li"><Link to="/connect"> Connect</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
