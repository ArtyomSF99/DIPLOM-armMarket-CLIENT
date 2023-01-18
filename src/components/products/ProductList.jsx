import React from 'react'
import ProductCard from './ProductCard'
import classes from './Products.module.css'

export default function ProductList({productArray}) {
  return (
    <div className={classes.product_list_container}>
        {productArray && productArray.map(el =>(
            <ProductCard key={el.id} product = {el}/>
        ))}
    </div>
  )
}
