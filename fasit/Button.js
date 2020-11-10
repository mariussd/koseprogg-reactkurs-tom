import React from "react";
import "./styles.css";

const Button = (props) => {
  return (
    <div>
      <button className="button" type="button" onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  );
};

export default Button;
