import React from 'react'
import ProductCard from '../products/ProductCard'
import classes from './User.module.css'

export default function ProfileProducts({products, setSelectedObj, setDeleteProductModal}) {
  
  return (
    

    <div className={classes.user_products}>
    <div className={classes.user_products_list}>
    {products
    ?products.map(el =>(
        <ProductCard key={el.id} product = {el} setSelectedObj={setSelectedObj} setDeleteProductModal={setDeleteProductModal} />
    ))
    :null}
    </div>
   

    </div>
  
   
  )
}
