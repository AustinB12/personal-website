import React from "react";

import { ReactComponent as Bg } from "../../assets/Burger.svg";
import Ab from "../../assets/ab.svg";

import "./header.css";

const Header = (props) => {
  let mainClass = "headerWrapper ";

  if (props.amDark) {
    mainClass = mainClass + "dark";
  }

  function handleClick() {
    props.toggleDark(!props.amDark);
  }

  return (
    <div className={mainClass}>
      <div className={"Mobile"}>
        <Bg />
      </div>
      <div className="Desktop">
        <img src={Ab} alt="initials"></img>
        <div className={"theme-container"}>
          <input type="checkbox" id="checkbox" onClick={() => handleClick()} />
          {!props.amDark ? (
            <span role="img" aria-label="sun with happy face">
              🌞
            </span>
          ) : (
            <span role="img" aria-label="moon with happy face">
              🌚
            </span>
          )}
        </div>
        <ul className={"link-holder"}>
          <li className={"header-item"}>
            <a href="#Me">About Me</a>
          </li>
          <li className={"header-item"}>
            <a href="#Skills">Skills</a>
          </li>
          <li className={"header-item"}>
            <a href="#Animations">Animations</a>
          </li>
          <li className={"header-item"}>
            <a href="#Projects">Projects</a>
          </li>
          <li className={"header-item"}>
            <a href="#Hobbies">Hobbies</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
