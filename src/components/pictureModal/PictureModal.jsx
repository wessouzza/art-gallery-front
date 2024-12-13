import React from "react";
import "./style.css";

const PictureModal = ({ isOpen, onClose, title, author, description, year, resolution,pic }) => {
  const handleClick =()=>{
    onClose();
  }
  return (
    <>
      <div className="wraper">
        {isOpen && (
          <div className="art-container">
            <div className="art-info">
              <div className="head">
                <h2>{title}</h2>
                <button onClick={handleClick}>x</button>
              </div>
              <h4>{author}</h4>
              <p className="art-description">{description}</p>
              <p>Data: {year}</p>
              <p>Resolução: {resolution}</p>
            </div>
            <div className="art-img">
              <img src={pic} alt="" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PictureModal;
