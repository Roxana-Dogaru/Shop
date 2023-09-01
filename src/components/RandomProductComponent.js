import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const style= {
  image: {
    width: 100,
    height: 100,   

  },
  text:{
    height: 80 ,
  }
}
 
const RandomProductComponent = () => {
    const [product, setProduct] = useState([]);
  
    const fetchData = () =>
      fetch(`https://fakestoreapi.com/products?limit=12`)
        .then((response) => response.json())
        .then((data) => setProduct(data)); 
  
    useEffect(() => {
      fetchData();
    }, []);
    return (
       <div className="container p-4">
        <div className="row">
          {product.map(product =>(
            
              <div className=" col d-flex flex-column justify-content-end" >
                <Link to={`/products/${product.id}`} >
                <figure key={product.id} className="figure border rounded m-2 ">
                  <img className="figure-img m-3"  src={product.image} alt={product.title} 
                  style={style.image}></img>
                  <figcaption className="figure-caption " >
                    <p className="text-center" style={style.text}>{product.title}</p>
                    <p className="fs-5 fw-bold text-end">{product.price}<span> EUR</span></p>
                  </figcaption>
                </figure>
                </Link>
              </div>                
                                          
          ))}        
        </div>
      </div>     
        
    );
  };
export default RandomProductComponent;
    