import React, { Component } from "react";
import moon_dark from "../images/moon_01.svg";
import moon_light from "../images/moon_02.svg";

function Navbar(props) {
  return (
    <div className="header">
      <div className="header__logo">Countries in the world</div>
      <div onClick={props.switchTheme} className="header__theme">
        <img
          src={props.theme ? moon_light : moon_dark}
          alt="dark"
          className="header__toggle"
        />
        {props.theme ? "Dark" : "Light"} mode
      </div>
    </div>
  );
}

export default Navbar;
