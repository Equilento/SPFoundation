/* eslint-disable quotes */
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React from "react";
import { Footer, Header } from "./containers";
import { Navbar } from "./components";
import "./App.css";
import OurWork from './OurWork';
import Board from "./Board";
import { Switch } from "react-router";
import Home from "./Home";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
    <Router>
      {/* <Switch> */}
  <Navbar />
  <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/board' element={<Board />} />
    <Route path='/ourwork' element={<OurWork />} />

    {/* <Route path='/inspire' element={<Inspiration />} />
    <Route path='/forum' element={<Forum />} /> */}
  </Routes>
  {/* </Switch> */}
</Router>
    </div>
    {/* <Program /> */}
    <Footer />
  </div>
);


export default App;
