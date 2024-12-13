import React, { useState } from "react";
import "./style.css";
import RoundedBtn from "../roundedBtn/RoundedBtn";
import SearchComponent from "../searchComponent/SearchComponent";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {

  return (
    <>
      <header>
        <nav className="navbar">
          <h1>
            inspir<span>art</span>ion
          </h1>
            <SearchComponent/>
            <RoundedBtn path={"contact"} className="collapse">Contato</RoundedBtn>
          <button className="menu-btn">
            <CgMenuRight size={38}/>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
