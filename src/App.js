import React from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Connect from "./components/Connect";
import Detail from "./components/Detail";
import Recipe from "./components/Recipe";
import { Route, Routes } from "react-router-dom";

{
  /* inline stylin can be done as style = {{property}} */
}
{
  /* Inline js can be done through {var name} */
}

export default function App() {
  return (
    <>
      <div className="App">
        {/* Routings  */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        <br></br>

        <Recipe />
        <Connect />
      </div>
    </>
  );
}
