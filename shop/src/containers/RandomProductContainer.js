import React from "react";
import RandomProductComponent from "../components/RandomProductComponent";


const RandomProductsContainer = () => {
  return (
    <>
    <h3 className="text-center">Best sellers</h3>
      <div > <RandomProductComponent /> </div>
    </>
    
  );
};

export default RandomProductsContainer;
