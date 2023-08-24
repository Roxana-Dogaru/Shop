import React from "react";
import { Link } from "react-router-dom";

const style= {
    image: {
      width: 200,
      height: 200,   
  
    }
  }
function ProductComponent (props) {
  return (
    <>
      
          <Link to={`/products/${props.id}`}>
            <figure key={props.id} className="figure border rounded m-2 ">
              <img className="figure-img m-3"  src={props.image} alt={props.title} 
                style={style.image}></img>
              <figcaption className="figure-caption">
                <p>{props.title}</p>
                  <p className="fs-5 fw-bold">{props.price}<span> EUR</span></p>
              </figcaption>
            </figure>
          </Link> 
       
    </>    
  )
}

export default ProductComponent