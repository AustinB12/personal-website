import React from "react";

import { ReactComponent as Bg } from "../../assets/Burger.svg";

import "./header.css";

const Header = (props) => {
  function handleClick() {
    props.toggleDark(!props.amDark);
  }

  return (
    <div className={"headerWrapper"}>
      <div className={"Mobile"}>
        <Bg />
      </div>
      <div className="Desktop">
        <svg
          width="495"
          height="370"
          viewBox="0 0 495 370"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M233 0H283L50 356H0L233 0Z" fill="white" />
          <rect x="233" width="50" height="370" fill="white" />
          <rect x="313" width="50" height="370" fill="white" />
          <rect
            x="126"
            y="212"
            width="27"
            height="96"
            transform="rotate(-90 126 212)"
            fill="white"
          />
          <path
            d="M372.5 370C404.989 370 436.147 359.096 459.121 339.686C482.094 320.276 495 293.95 495 266.5C495 239.05 482.094 212.724 459.121 193.314C436.147 173.904 404.989 163 372.5 163L372.5 194.704C395.037 194.704 416.651 202.268 432.587 215.732C448.524 229.197 457.476 247.458 457.476 266.5C457.476 285.542 448.523 303.803 432.587 317.268C416.651 330.732 395.037 338.296 372.5 338.296L372.5 370Z"
            fill="white"
          />
          <path
            d="M372.5 156C396.767 156 420.041 147.835 437.2 133.301C454.36 118.767 464 99.0543 464 78.5C464 57.9457 454.36 38.2333 437.2 23.6992C420.041 9.16516 396.767 1 372.5 1L372.5 26.3207C388.839 26.3207 404.508 31.8181 416.062 41.6036C427.615 51.3892 434.105 64.6612 434.105 78.5C434.105 92.3388 427.615 105.611 416.062 115.396C404.508 125.182 388.839 130.679 372.5 130.679L372.5 156Z"
            fill="white"
          />
        </svg>

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
