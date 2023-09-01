import React from "react";
import RandomProductComponent from "../components/RandomProductComponent";
import arrowDown from "../assets/img/arrowDown.gif";


const RandomProductsContainer = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
          <img src={arrowDown} alt="arrow" />
          <h3 className="text-center">Best sellers</h3>
          <img src={arrowDown} alt="arrow" />
      </div>
    
      <div > <RandomProductComponent /> </div>
    </>
    
  );
};

export default RandomProductsContainer;
