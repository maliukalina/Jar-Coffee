import React from "react";
import ProductCard from "./ProductCard";
import "./products.css"

const productList = [{
  id: 1,
  name: "Holiday blend",
  size: "Large",
  grind: "Whole bean",
  price: 19.99,
}, {
  id: 2,
  name: "Italian Roast",
  size: "Small",
  grind: "Espresso",
  price: 20.99,
},{
  id: 3,
  name: "House  blend",
  size: "Large",
  grind: "Whole bean",
  price: 16.99,
}, {
  id: 4,
  name: "French blend",
  size: "Medium",
  grind: "Whole bean",
  price: 19.99,
}
]

function Products() {
  return (
    <>
    <h2>Try These Blended Coffees</h2>
    <div className ="product-list">
      {productList.map(item => {
         return  (
         <ProductCard 
         key={item.id}
         name={item.name}
         price={item.price}
         grind={item.grind}
         size={item.size}/>
         )
      })}
     
    </div>
    </>
  )
}

export default Products