/* eslint-disable quotes */
import React from "react";
import { Footer, Header, Program } from "./containers";
import { Navbar } from "./components";
import "./App.css";

const OurWork = () => (
  <div className="App">
    <div className="gradient__bg">
      <Program />
      <Header />
    </div>
    {/* <Program /> */}
  </div>
);

export default OurWork;
