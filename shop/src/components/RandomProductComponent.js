import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const style= {
  image: {
    width: 100,
    height: 100

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
              <Link to={`/products/${product.id}`} >
                <figure key={product.id} className="figure col d-flex flex-column justify-content-end border m-2">
                  <img className="card-img-top"  src={product.image} alt={product.title} 
                  style={style.image}></img>
                  <div>
                    {product.title}
                  
                  </div>
                  <div>
                    {product.price}
                  </div>                
                  
                </figure>
              </Link>
                              
            ))}
        
          </div>
        </div>  
       
        
        
          
        
      );
    };
    
    export default RandomProductComponent;
    