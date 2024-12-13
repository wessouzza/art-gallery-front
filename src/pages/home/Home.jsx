import React from "react";
import "./style.css";
import RoundedBtn from "../../components/roundedBtn/RoundedBtn";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="text-box">
          <h1>Inspir<span>art</span>ion</h1>
        </div>

        <div className="btn-container">
          <RoundedBtn
            path={"home/gallery"}
          >
            Acessar galeria
            <BsArrowRight />
          </RoundedBtn>
        </div>
      </div>
    </>
  );
};

export default Home;
