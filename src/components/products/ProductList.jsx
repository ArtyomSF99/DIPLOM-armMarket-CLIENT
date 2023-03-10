import React from 'react'
import ProductCard from './ProductCard'
import classes from './Products.module.css'

export default function ProductList({productArray,  setDeleteProductModal, setSelectedObj}) {
  return (
    <div className={classes.product_list_container}>
        {productArray && productArray.map(el =>(
            <ProductCard key={el.id} product = {el} setSelectedObj={setSelectedObj} setDeleteProductModal={setDeleteProductModal}/>
        ))}
    </div>
  )
}
