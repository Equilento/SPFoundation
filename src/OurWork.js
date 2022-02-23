/* eslint-disable quotes */
import React from "react";
import { Footer, Header } from "./containers";
import { Navbar } from "./components";
import "./App.css";

const OurWork = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Program /> */}
    <Footer />
  </div>
);

export default OurWork;
