import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

import "./style.css";
import RoundedBtn from "../roundedBtn/RoundedBtn";
import { Link } from "react-router";

const Footer = () => {
  const returnToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <ul>
            <li>
              <Link to={"gallery"}>Home</Link>
            </li>
            <li>
              <Link to="about">Sobre</Link>
            </li>
            <li>
              <Link to="contact">Contato</Link>
            </li>
          </ul>
        </div>

        <RoundedBtn onClick={() => returnToTop()} className="btn">
          <FaAngleDoubleUp />
        </RoundedBtn>
      </div>
    </>
  );
};

export default Footer;
