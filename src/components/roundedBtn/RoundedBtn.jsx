import React from "react";
import { Link, Links } from "react-router";
import "./style.css";

const RoundedBtn = ({ className, children, icon, path, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <>
      <Link to={path} onClick={handleClick} className={`${className} btn`}>
        {children}
        <span>{icon}</span>
      </Link>
    </>
  );
};

export default RoundedBtn;
