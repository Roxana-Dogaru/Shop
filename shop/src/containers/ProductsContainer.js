
import TitleComponent from "../components/TitleComponent";
import { Link } from "react-router-dom";

function ProductsContainer  (props)  {
    
    return (
        <div>
            <div className="mx-4">
                <TitleComponent text={props.title} />
            </div>
            <Link to={`/products/${props.data.id}`} >
               
                    <div className="text-center w-25 mx-5">
                        <img src={props.data.image} alt={props.data.title} className=" img-fluid w-25"
                            />
                        <div>
                            <p className="text-center" >{props.data.title}</p>
                            {/*
                            <p className="fs-5 fw-bold text-end">{props.data.price}</p>
                             */}
                        </div>
                    </div>

            
            </Link>
        </div>
    )
    
}

export default ProductsContainer