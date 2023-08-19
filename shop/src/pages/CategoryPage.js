import React, { useEffect, useState } from "react";
import TopNavContainer from "../containers/TopNavContainer";
import CategoryContainer from "../containers/CategoryContainer";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  let { categoryName } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setData(responseJSON);
      });
  }, [categoryName]);

  return (
    <>
      <TopNavContainer noSearchBar={true} />
      {data.products &&
        data.products.map((item) => (
          <CategoryContainer
            key={item.id}            
            title={item.title}
            image={item.image}           
            data={item}
          />
        ))}
    </>
  );
};
export default CategoryPage

