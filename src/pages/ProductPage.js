import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContainer from "../containers/ProductContainer";
import TopNavContainer from "../containers/TopNavContainer";
import FooterContainer from "../containers/FooterContainer";

const ProductPage = () => {
  let { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setData(responseJSON);
      });
  }, [id]);

  return (
    <>
      <TopNavContainer noSearchBar={true} />
        <ProductContainer 
           key={data.id}
           title={data.title}
           image={data.image}
           price={data.price}
           data={data}
        />                
      <FooterContainer />   
       
        
    </>
  );
};

export default ProductPage