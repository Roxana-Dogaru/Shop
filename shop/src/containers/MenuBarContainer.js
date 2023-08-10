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
    <div >
      <ul>
        {categories.map(category =>(
          <li > {category}</li>
        ))}
        
      </ul>
    </div>
  )

}

export default MenuBarContainer