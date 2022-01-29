import React from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Recipe from "./components/Recipe";
import Detail from "./components/Detail";
import { Route, Routes } from "react-router-dom";
import Connect from "./components/Connect";

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
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
        <br></br>
      
  
      </div>
    </>
  );
}
