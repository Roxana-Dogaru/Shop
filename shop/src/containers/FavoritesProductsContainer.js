import React from "react";
import ProductComponent from "../components/ProductComponent";


const FavoritesProductsContainer = ({products}) => {
  
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Your favorite Products!</h1>
      </div> 
        {products.map((product) => (
           <ProductComponent
            title={product.title}
            image={product.image}
            key={product.id}
            price={product.price}
            id={product.id}
           />
         ))}
        
    </>
  )
}

export default FavoritesProductsContainer