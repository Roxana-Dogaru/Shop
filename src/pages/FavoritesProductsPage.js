import React, { useState , useEffect} from "react";
import TopNavContainer from "../containers/TopNavContainer";
import FavoritesProductsContainer from "../containers/FavoritesProductsContainer";
import FooterContainer from "../containers/FooterContainer";

const FavoritesProductsPage = () => {
  const [products, setProducts] = useState ([{}]); 
  useEffect (() => setProducts (JSON.parse(localStorage.getItem("products"))), []) 
  
    return (
      <>
        <TopNavContainer noSearchBar={true}/>
        
      
        <FavoritesProductsContainer products={products} />
        
        <FooterContainer />
      </>
      
    );
  
  };

export default FavoritesProductsPage

