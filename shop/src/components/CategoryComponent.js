import React, { useEffect, useState } from "react";


const style= {
  image: {
    width: 200,
    height: 200

  },
}
const CategoryComponent = ({categoryName}) => {
    
    const [categoryProducts, setCategoryProducts] = useState([])
   
  
    const fetchData = () =>
      fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then((response) => response.json())
        .then((data) => setCategoryProducts(data)); 
  
    useEffect(() => {
      fetchData();
    },);
        
    return (
       
      <div className="container p-4">
        <div className="row">
          {categoryProducts.map(categoryProducts =>(
            <figure className="figure col d-flex flex-column justify-content-end border m-2">
              <img className="card-img-top " key={categoryProducts.id} src={categoryProducts.image} alt={categoryProducts.title} 
                style={style.image}></img>
              <figcaption className="figure-caption text-white-50 text-center fw-bold d-none d-md-block"> 
                <div>
                  {categoryProducts.title}
                </div>
              </figcaption>
            </figure>
                            
          ))}
       
        </div>
      </div>       
        
      );
    };
    
    export default CategoryComponent;
    