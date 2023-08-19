import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContainer from "../components/ProductComponent";
import TopNavContainer from "../containers/TopNavContainer";

const ProductPage = () => {
  let { idProduct } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idProduct}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setData(responseJSON);
      });
  }, [idProduct]);

  return (
    <>
      <TopNavContainer noSearchBar={true} />
      {data.products &&
        data.products.map((item) => (
          <ProductContainer
            key={item.id}            
            title={item.title}
            image={item.image}            
            data={item}
          />
        ))}
    </>
  );
};

export default ProductPage