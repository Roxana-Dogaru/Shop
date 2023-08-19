import React from "react";
import { Link } from "react-router-dom";

function ProductComponent (props) {
    return(
        <div>
            <Link to={`/products/${props.id}`} >
                <div>
                    <img src={props.image} alt={props.title} />
                    <div>
                        <p>{props.title}</p>
                        <span>{props.price}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductComponent