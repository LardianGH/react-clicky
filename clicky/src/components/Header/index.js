import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Streak: {props.correct} / {props.total}
    </div>
  </div>
);

export default Header;
