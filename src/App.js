/* eslint-disable quotes */
import React from "react";
import { Footer, Program, Header } from "./containers";
import { Navbar } from "./components";

import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Program />
    <Footer />
  </div>
);

export default App;
