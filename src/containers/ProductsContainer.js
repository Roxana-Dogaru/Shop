
import TitleComponent from "../components/TitleComponent";
import { Link } from "react-router-dom";

function ProductsContainer  (props)  {
    
    return (
        <div className=" " >
            <div className=" text-center mx-4">
                <TitleComponent text={props.title} />
            </div>
            <div className="d-flex ">
                <Link className="text-decoration-none" to={`/products/${props.data.id}`} >
                
                <div className="  mx-5">
                    <div className=" text-center">
                    <img src={props.data.image} alt={props.data.title} 
                       style={{width: "100px", height: "auto"}} />
                    </div>
                    
                    <div >
                        <p className=" text-bg-light " >{props.data.title}</p>
                        
                    </div>
                </div>

        
                </Link>
                </div>
            
        </div>
    )
    
}

export default ProductsContainer