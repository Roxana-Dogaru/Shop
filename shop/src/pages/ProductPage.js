import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContainer from "../containers/ProductContainer";
import TopNavContainer from "../containers/TopNavContainer";

export const ProductPage = () => {
  let { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setData(responseJSON);
      });
  }, [id]);

  return (
    <>
      <TopNavContainer noSearchBar={true} />
      {data.products &&
        data.products.map((item) => (
          <ProductContainer
            key={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            data={item}
          />
        ))}
    </>
  );
};

export default ProductPage