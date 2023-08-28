
import TitleComponent from "../components/TitleComponent";
import { Link } from "react-router-dom";

function ProductsContainer  (props)  {
    if (props.data.id === ""){
        return <div> </div>
    }else {
    return (
        <div>
            <div>
                <TitleComponent text={props.title} />
            </div>
            <Link to={`/products/${props.data.id}`} >
                <div >
                    <div >
                        <img src={props.data.image} alt={props.data.title} className="img-fluid "
                            />
                        <div>
                            <p>{props.data.title}</p>
                            <span>{props.data.price}</span>
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    )
    }
}

export default ProductsContainer