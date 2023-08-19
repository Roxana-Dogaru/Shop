import React, { useState, useEffect } from "react";
import mockData from "../assets/mock";
import TopNavContainer from "../containers/TopNavContainer";
import CarouselImages from "../containers/CarouselImages";
import RandomProductsContainer from "../containers/RandomProductContainer";
import ProductsContainer from "../containers/ProductsContainer";


function HomePage () {
    const [products, setProducts] = useState(mockData);
    const [searchValue, setSearchValue] = useState("");
    const [title, setTitle] = useState("Best sellers");

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
        setTitle(`Products with: ${e.target.value}`);
      };

      const fetchData = (searchValue) =>
      fetch(`https://fakestoreapi.com/products/${searchValue}`)
        .then((response) => response.json())
        .then((responseJSON) => setProducts(responseJSON));
  
    useEffect(() => {
      fetchData(searchValue);
    }, [searchValue]);

    return(
        <>
            <TopNavContainer searchValue={searchValue} handleInputChange={handleInputChange} /> 
            <div> <CarouselImages /></div>
            <div> <RandomProductsContainer /> </div>

            <div><ProductsContainer data={products} title={title} /> </div>
        </>
        
        
    )

}

export default HomePage