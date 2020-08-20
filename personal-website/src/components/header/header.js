import React, { Component } from "react";

import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="headerWrapper">
        <ul>
          <li>About Me</li>
          <li>Skills</li>
          <li>Animations</li>
          <li>Projects</li>
          <li>Hobbies</li>
        </ul>
      </div>
    );
  }
}

export default Header;
