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

  const productDataCartFromLocalStorage = JSON.parse(localStorage.getItem("productsCart")) || [{}];
  const [productDataCart, setProductDataCart] = useState(productDataCartFromLocalStorage);
  const [textCart, setTextCart] = useState("♡ Add to shopping cart");

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

  const handleAddToShoppingCart = () => {
    if (!productDataCartFromLocalStorage.some((itemInLS) => itemInLS.id === data.id))
      setProductDataCart([
        ...productDataCart,
        {
          title,
          image,
          price,
          id: data.id,
        },
      ])
      setTextCart("🛒 Added")
  }

  useEffect(() => {
    localStorage.setItem("productsCart", JSON.stringify(productDataCart));
  }, [productDataCart]);

  return (
    <>      
      <div className="row col-md">
        <img className="figure-img m-5 img-fluid"  src={data.image} alt={data.title} 
          style={style.image}>
        </img>
        <div className="w-50 m-5">
          <div className="d-flex justify-content-around">
            <ButtonComponent  type={"success"} text={textCart} onClickEvent={handleAddToShoppingCart} />
            <ButtonComponent type={"success"} text={text} onClickEvent={handleAddToFavorites} />
          </div>
        
          <h2  className="m-3  fw-bold text-end">{title}</h2>
          
            <p className="m-3 fs-5 fw-bold text-end ">{data.price}<span> EUR</span></p>
        
          <div className="my-5">
            <p>{data.description}</p>
          </div>
        </div>
      </div>     
    </>
  )
}

export default ProductContainer