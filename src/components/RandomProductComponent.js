import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const style= {
  image: {
    width: 130 ,
    height: 130,   

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
                <Link className="text-decoration-none" to={`/products/${product.id}`} >
                  <div className="card m-3 text-center" style={{width: "150px"}}>
                  <img src={product.image} alt={product.title} 
                   className="card-img-top mx-auto my-1" style={style.image}></img>
                  <div className="card-body fs-6 ">
                    <h5 className="card-title fs-6">{product.title.slice(0,20)}</h5>
                    <p className="card-text text-end">{product.price} EUR</p>
                  </div>

                  </div>
                </Link>
              </div>                
                                          
          ))}        
        </div>
      </div>     
        
    );
  };
export default RandomProductComponent;
    