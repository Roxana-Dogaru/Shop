import React, { useEffect, useState } from "react";
import TopNavContainer from "../containers/TopNavContainer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import FooterContainer from "../containers/FooterContainer";

const style= {
  image: {
    width: 150,
    height: 150,   

  },
  text:{
    height: 80 ,
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
                  <p className="text-center" style={style.text}>{data.title}</p>
                    <p className="fs-5 fw-bold text-end">{data.price}<span> EUR</span></p>
                  </figcaption>
                </figure>
              </Link>
              </div>                
            ))}
            
        
          </div>
        </div>  
      <FooterContainer />
    </>
  );
};
export default CategoryPage

