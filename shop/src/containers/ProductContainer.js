import React, {useEffect, useState} from "react";
import ButtonComponent from "../components/ButtonComponent";

const style= {
  image: {
    maxWidth: 250,
    maxHeight: 250,   

  }
}

const ProductContainer = ({title, image, data, price}) => {

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
              price,
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
      
        <div className="row col-md">
          <img className="figure-img m-5 img-fluid"  src={data.image} alt={data.title} 
            style={style.image}>
          </img>
          <div className="w-50 m-5">
            <h2>{title}</h2>
            <div className="d-flex my-3">
              <p className="d-flex fs-5 fw-bold justify-content-center ">{data.price}<span> EUR</span></p>
              <ButtonComponent type={"success"} text={text} onClickEvent={handleAddToFavorites} />
            </div>
            <div className="my-5">
              <p>{data.description}</p>
            </div>
          </div>

        </div>
        
          
            
          
        </>
    )
}

export default ProductContainer