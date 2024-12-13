import React, { useState } from "react";
import "./style.css";

const Card = ({thumb, title, author, onClick, alt_text}) => {

  const handleClick =()=>{
    onClick();
  }
  
  return (
    <>
      <div onClick={handleClick} className="card">
        <div>
          <img src={thumb} alt={alt_text}/>
        </div>
        <div className="card-info">
          <h2>{title}</h2>
          <span>{author}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
