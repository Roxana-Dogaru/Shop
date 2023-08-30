import React, { useState , useEffect} from "react";
import TopNavContainer from "../containers/TopNavContainer";
import FooterContainer from "../containers/FooterContainer";
import ShoppingCartProductsContainer from "../containers/ShoppingCartProductsContainer";

const ShoppingCart = () => {
    const [productsCart, setProductsCart] = useState ([{}]); 
    useEffect (() => setProductsCart (JSON.parse(localStorage.getItem("productsCart"))), []) 

    return (
        <>
            <TopNavContainer noSearchBar={true}/>
             <ShoppingCartProductsContainer productsCart={productsCart} />
             <FooterContainer />
        </>
             
        
        
    )
}
export default ShoppingCart