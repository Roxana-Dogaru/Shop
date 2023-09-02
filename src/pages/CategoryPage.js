import React, { useEffect, useState } from "react";
import TopNavContainer from "../containers/TopNavContainer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import FooterContainer from "../containers/FooterContainer";

const style= {
  image: {
    width: 130,
    height: 130,   

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
              <Link className="text-decoration-none" to={`/products/${data.id}`} >
                <div className="card m-3 text-center" style={{width: "150px"}}>
                    <img src={data.image} alt={data.title} 
                    className="card-img-top mx-auto my-1" style={style.image}></img>
                    <div className="card-body fs-6 ">
                      <h5 className="card-title fs-6">{data.title.slice(0,20)}</h5>
                      <p className="card-text text-end">{data.price} EUR</p>
                    </div>
                </div>
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

