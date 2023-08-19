import ProductComponent from "../components/ProductComponent";
import TitleComponent from "../components/TitleComponent";

const ProductContainer = (props) => {
    return (
        <div>
            <div>
                <TitleComponent text={props.title} />
            </div>
            <div>
            {props.data.products &&
          props.data.products
            .slice(0, 10)
            .map((product) => (
              <ProductComponent
                title={product.title}
                imageSRC={product.image}
                category={product.category}
                key={product.id}
                id={product.id}
              />
            ))}
            </div>
        </div>
    )
}

export default ProductContainer