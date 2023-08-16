import React from "react";
import TopNavContainer from "../containers/TopNavContainer";
import CarouselImages from "../containers/CarouselImages";
import RandomProductsContainer from "../containers/RandomProductContainer";


function HomePage () {
    return(
        <>
        <div> <TopNavContainer /> </div>
        <div> <CarouselImages /> </div>
        <div> <RandomProductsContainer /> </div>
        </>
        
        
    )

}

export default HomePage