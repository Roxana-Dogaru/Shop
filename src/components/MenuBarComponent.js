import React, { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import shirt from "../assets/img/shirt.png";
import dress from "../assets/img/dress.png";
import jewelry from "../assets/img/jewelry.png";
import electronics from "../assets/img/electronics.png";

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
        <div className="d-flex justify-content-between d-block d-md-none mx-3">
        <div className="d-flex"  style={{ width: "60px", height: "60px" }} >
          <Link to={`/category/${"electronics"}`} >
            <img src={electronics} className="img-fluid "  alt="electronics" />
          </Link>
        </div>
        <div className=""  style={{ width: "60px", height: "60px" }} >
          <Link to={`/category/${"jewelery"}`}>
            <img src={jewelry} className="img-fluid "  alt="jewelry" />
          </Link>
        </div>
        <div className=""  style={{ width: "60px", height: "60px" }} >
          <Link to={`/category/${"women's clothing"}`}>
            <img src={dress} className="img-fluid "  alt="dress" />
          </Link>
          </div>
          <div className=""  style={{ width: "60px", height: "60px" }} >
          <Link to={`/category/${"men's clothing"}`}>
            <img src={shirt} className="img-fluid "  alt="shirt" />
          </Link>
          </div>
        </div> 
        <div className="d-flex justify-content-around mt-3">
        
        {categories.map(category =>(
           <Link to={`/category/${category}`}>
            <div className=" d-none d-md-block">
              <button button  className="btn btn-light " key={categories.item}> {category}</button>
            </div>
            
          
          </Link>
        ))}  
        
      </div>      
                 
        
        
      </>
      
      
    )
  
  }
  
  export default MenuBarComponent;

