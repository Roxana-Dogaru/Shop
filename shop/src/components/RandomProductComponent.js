import React, { useEffect, useState } from "react";


const style= {
  image: {
    width: 200,
    height: 200

  }
}

const RandomProductComponent = () => {
  const [products, setProduct] = useState([]);

  const fetchData = () =>
    fetch(`https://fakestoreapi.com/products?limit=8`)
      .then((response) => response.json())
      .then((data) => setProduct(data)); 

  useEffect(() => {
    fetchData();
  }, []);

  return (
    
     
      
        
    <div className="d-flex">
      {products.map(product =>(
         [<div class="card" style={{width: 300}}>
            <img class="card-img-top" key={product.id} src={product.image} alt={product.title} style={style.image}></img>
            <div class="card-body">
              <h5 key={product.id}> {product.title}</h5>
              <h5 key={product.id}> {product.price}</h5>
              
            </div>
          </div>
         ]
         
         
        
           
      ))}
   
    </div>
      
    
  );
};

export default RandomProductComponent;