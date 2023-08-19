import React, {useEffect, useState} from "react";
import ButtonComponent from "../components/ButtonComponent";

const ProductContainer = ({title, image, data}) => {

    const productDataFromLocalStorage = JSON.parse(localStorage.getItem("products")) || [{}];
    const [productData, setProductData] = useState(productDataFromLocalStorage);
    const [text, setText] = useState("♡ Add to Favorites");

    const handleAddToFavorites = () => {
        
        if (!productDataFromLocalStorage.some((itemInLS) => itemInLS.id === data.id))
          
          setProductData([
            ...productData,
            {
              title,
              image,
              id: data.id,
            },
          ]);
    
        setText("♡ Added");
      };
      useEffect(() => {
        localStorage.setItem("products", JSON.stringify(productData));
      }, [productData]);

    return (
        <>
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                    <ButtonComponent type={"success"} text={text} onClickEvent={handleAddToFavorites} />
                    </div>
                </div>
            </div>
            <div>

            </div>
        </>
    )
}

export default ProductContainer