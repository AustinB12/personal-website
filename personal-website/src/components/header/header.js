import React, { Component } from "react";

import { ReactComponent as Bg } from "../../assets/Burger.svg";

import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="headerWrapper">
        <div className="Mobile">
          <Bg />
        </div>
        <div className="Desktop">
          <ul>
            <a href="#Me">
              <li>About Me</li>
            </a>
            <a href="#Skills">
              <li>Skills</li>
            </a>
            <a href="#Animations">
              <li>Animations</li>
            </a>
            <a href="#Projects">
              <li>Projects</li>
            </a>
            <a href="#Hobbies">
              <li>Hobbies</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
