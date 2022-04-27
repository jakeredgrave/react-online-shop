import React from "react";

const Button = ({ text, buttonClass, onClick }) => {
  return (
    <div>
      <button className={buttonClass} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
