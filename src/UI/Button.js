import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      className="custom__button"
      type={props.type}
      onChange={props.onChange}
      onClick={props.onClick}
      value={props.value}
    >
    {props.children}
    </button>
  );
};

export default Button;
