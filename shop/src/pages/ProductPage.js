import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContainer from "../containers/ProductContainer";
import TopNavContainer from "../containers/TopNavContainer";

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
      
          <figure key={data.id} className="figure col d-flex flex-column justify-content-end border m-2">
          <img className="card-img-top"  src={data.image} alt={data.title} 
          ></img>
          <div>
            {data.title}
          </div>
          <div>
            {data.price}
          </div>                
          
        </figure>
        
    </>
  );
};

export default ProductPage