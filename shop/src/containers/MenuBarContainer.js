import React, { useEffect, useState } from "react"

function MenuBarContainer() {
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
    <div className="d-flex justify-content-around">
      
        {categories.map(category =>(
          <p > {category}</p>
        ))}
        
      
    </div>
  )

}

export default MenuBarContainer