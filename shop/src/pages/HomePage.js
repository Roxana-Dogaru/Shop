import React, { useEffect, useState } from "react";
import mockData from "../assets/mock";
import TopNavContainer from "../containers/TopNavContainer";
import MenuBarContainer from "../containers/MenuBarContainer";
import RandomProductsContainer from "../containers/RandomProductsContainer";
import ProductContainer from "../containers/ProductContainer";
import Carousel from "../containers/Carousel";

function HomePage() {
  const [products, setProducts] = useState(mockData)
  const [searchValue, setSearchValue] = useState("");
  const [title, setTitle] = useState("Latest products");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    setTitle(`Products with: ${e.target.value}`);
  };

  const fetchData = (searchValue) => 
    fetch(`https://fakestoreapi.com/products=${searchValue}`)
      .then((response) => response.json())
      .then((responseJSON) => setProducts(responseJSON));

  useEffect(() => {
    fetchData(searchValue);
  }, [searchValue]);


  return (
    <>
      <TopNavContainer searchValue={searchValue} handleInputChange={handleInputChange} />
      <div className="">
      <div>
        <MenuBarContainer />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <RandomProductsContainer />
      </div>
        <ProductContainer data={products} title={title} />
      </div>
      
    </>
    
  );
  

}

export default HomePage;