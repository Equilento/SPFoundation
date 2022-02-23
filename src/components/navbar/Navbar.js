/* eslint-disable */
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="spf__navbar">
      <div className="spf__navbar-links_logo">
        <img src={logo} />
      </div>
      <div className="spf__navbar-links_container">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#ourwork">Our Work</a>
        </p>
        <p>
          <a href="#board">Board</a>
        </p>
        <p>
          <a href="#meet">Get Involved</a>
        </p>
        <p>
          <a href="#blot">Blot</a>
        </p>
      </div>
      <div className="spf__navbar-sign">
        <button type="button">Donate</button>
      </div>
      <div className="spf__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="spf__navbar-menu_container scale-up-center">
            <div className="spf__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#program">What is SPF?</a>
              </p>
              <p>
                <a href="#possibility">Open AI</a>
              </p>
              <p>
                <a href="#features">Case Studies</a>
              </p>
              <p>
                <a href="#program">Library</a>
              </p>
            </div>
            <div className="spf__navbar-menu_container-links-sign">
              <a href="#" class="donate">
                DONATE
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
