import React from "react";
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
function ProductComponent (props) {
  return (
    <div className="container">
      <div className="row">
        <div className=" col d-flex flex-column justify-content-end ">
          <Link to={`/products/${props.id}`}>
            <figure key={props.id} className="figure border rounded, m-2 ">
              <img className="figure-img m-3"  src={props.image} alt={props.title} 
                style={style.image}></img>
              <figcaption className="figure-caption">
                <p className="text-center" style={style.text}>{props.title}</p>
                <p className="fs-5 fw-bold text-end">{props.price}<span> EUR</span></p>
              </figcaption>
            </figure>
          </Link> 
        </div>
      </div>
    </div>    
  )
}

export default ProductComponent