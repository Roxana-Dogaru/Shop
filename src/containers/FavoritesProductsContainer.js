import React from "react";
import ProductComponent from "../components/ProductComponent";


const FavoritesProductsContainer = ({products}) => {
  const newProducts = products.slice(1);
  if(products.length === 1){
    return (
    <div className="px-4 py-5 my-5 text-center"> 
      <h1 className="display-5 fw-bold m-3">Your favorite Products!</h1>
      <h1 className="display-6 fw-bold m-3"> No items added yet 😔</h1>
    </div>)
    
  }else {
  
  return (
    <>
      <div className="px-4 py-5 my-4 text-center">
        <h1 className="display-5 fw-bold">Your favorite Products!</h1>
      </div> 
      <div className="d-flex">
        {newProducts.map((product) => (
           <ProductComponent
            title={product.title}
            image={product.image}
            key={product.id}
            price={product.price}
            id={product.id}
           />
         ))}
      </div>
         
        
    </>
  )}
}

export default FavoritesProductsContainer