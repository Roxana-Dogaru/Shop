import React, { useEffect, useState } from "react";
import TopNavContainer from "../containers/TopNavContainer";
import MenuBarContainer from "../containers/MenuBarContainer";

function HomePage() {
  const [products, setProducts] = useState([])


 
  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setProducts(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div>
        <TopNavContainer />
      </div>
      <div>
      <MenuBarContainer />
      </div>
      <div>
        <ul>
          {products.map(product =>(
            <li key={product.id}> {product.title}</li>
          ))}
        
        </ul>
      </div>
    </>
    
  )

}

export default HomePage