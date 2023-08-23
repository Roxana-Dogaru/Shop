import React, { useEffect, useState } from "react";
import TopNavContainer from "../containers/TopNavContainer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const style= {
  image: {
    width: 200,
    height: 200,   

  }
}

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
              <div className=" col d-flex flex-column justify-content-end ">
              <Link to={`/products/${data.id}`} >
              <figure key={data.id} className="figure border rounded m-2 ">
                <img className="figure-img m-3"  src={data.image} alt={data.title} 
                style={style.image}></img>
                <figcaption className="figure-caption">
                  <p>{data.title}</p>
                  <p className="fs-5 fw-bold">{data.price}<span> EUR</span></p>
                </figcaption>
              </figure>
              </Link>
              </div>                
            ))}
            
        
          </div>
        </div>  
     
    </>
  );
};
export default CategoryPage

