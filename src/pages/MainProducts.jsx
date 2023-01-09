import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/products/ProductCard'

export default function MainProducts() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  useEffect(() =>{

  },[])

  const test = () =>{
    console.log(products)
  }

  return (
    <div className='main_responsiv'>
      <div className='all_products_container'>
        <div className='all_products'>
          <ProductCard product = {products[0]}/>
          <button onClick={test}>test </button>
        </div>
      </div>
    </div>
  )
}
