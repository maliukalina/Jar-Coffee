import React from "react";

function ProductCard({ name, size, grind, price }) {
  return (
    <div className= "product-card">
        <h2>{name}</h2>
        <h5>{size}/{grind}</h5>
        <div className = "product-price">${price}</div>
    </div>
  )
}


export default ProductCard