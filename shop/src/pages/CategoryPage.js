import React, { useEffect, useState } from "react";
import TopNavContainer from "../containers/TopNavContainer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  let { categoryName } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setData(responseJSON);
      });
  }, [categoryName]);

  return (
    <>
      <TopNavContainer noSearchBar={true} />
      
       
        <div className="container p-4">
          <div className="row">
            {data.map(data =>(
              <Link to={`/products/${data.id}`} >
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
              </Link>               
            ))}
            
        
          </div>
        </div>  
     
    </>
  );
};
export default CategoryPage

