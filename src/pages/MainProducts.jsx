import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/products/ProductCard'
import Loader from '../components/UI/Loader/Loader'

export default function MainProducts() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
 

  const test = () =>{
    console.log(products)
  }

  return (
    products.length ===0
    ?<Loader/>
    :<div className='main_responsiv'>
      <div className='all_products_container'>
        <div className='all_products'>
          {products.map(el =>(
            <ProductCard key={el.id} product = {el}/>
          ))}
          <button onClick={test}>test </button>
        </div>
      </div>
    </div>
  )
}
