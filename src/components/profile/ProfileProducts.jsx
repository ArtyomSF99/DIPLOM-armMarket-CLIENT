import React from 'react'
import ProductCard from '../products/ProductCard'
import classes from './User.module.css'

export default function ProfileProducts({products}) {
  
  return (
    <div className='profile_additional_info_show'>

    <div className={classes.user_products}>
    <div className={classes.user_products_list}>
    {products
    ?products.map(el =>(
        <ProductCard key={el.id} product = {el}/>
    ))
    :null}
    </div>
   

    </div>
  
    </div>
  )
}
