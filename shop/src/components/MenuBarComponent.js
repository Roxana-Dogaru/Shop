import React, { useEffect, useState, } from "react";
import { Link } from "react-router-dom";

function MenuBarComponent() {
    
    const [categories, setCategories] = useState([])
  
    const fetchData = () => {
      fetch("https://fakestoreapi.com/products/categories")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setCategories(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  
    return (
      <>
        <div className="d-flex justify-content-around mt-3">
        
        {categories.map(category =>(
           <Link to={`/category/${category}`}>
          <button  className="btn btn-light" key={categories.item}> {category}</button>
          </Link>
        ))}         
                 
        </div>
        
      </>
      
      
    )
  
  }
  
  export default MenuBarComponent;

