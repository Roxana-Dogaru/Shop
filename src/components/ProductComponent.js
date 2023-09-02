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
      <div className=" col d-flex flex-column justify-content-end" >
                <Link className="text-decoration-none" to={`/products/${props.id}`} >
                  <div className="card m-3 text-center" style={{width: "150px"}}>
                    <img src={props.image} alt={props.title} 
                    className="card-img-top mx-auto my-1" style={style.image}></img>
                  <div className="card-body fs-6 ">
                    <h5 className="card-title fs-6">{props.title}</h5>
                    <p className="card-text text-end">{props.price} EUR</p>
                  </div>

                  </div>
                </Link>
              </div>
      </div>
    </div>    
  )
}

export default ProductComponent