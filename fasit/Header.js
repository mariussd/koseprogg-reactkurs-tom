import React from "react";
import "./styles.css";

const Header = (props) => {
  return (
    <div className="Header">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
