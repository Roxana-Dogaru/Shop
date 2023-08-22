
import TitleComponent from "../components/TitleComponent";
import { Link } from "react-router-dom";

const ProductsContainer = (props) => {
    return (
        <div>
            <div>
                <TitleComponent text={props.title} />
            </div>
            <Link to={`/products/${props.data.id}`} >
                <div>
                    <img src={props.data.image} alt={props.data.title} />
                    <div>
                        <p>{props.data.title}</p>
                        <span>{props.data.price}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductsContainer