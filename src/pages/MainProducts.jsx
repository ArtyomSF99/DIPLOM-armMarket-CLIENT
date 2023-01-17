import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/products/ProductCard'
import ProductSearch from '../components/products/ProductSearch'
import ProductSort from '../components/products/ProductSort'

import AllProductsCategorySelect from '../components/UI/list/AllProductsCategorySelect'

import BlockLoader from '../components/UI/Loader/BlockLoader'
import Loader from '../components/UI/Loader/Loader'
import ProductService from '../services/ProductService'
import { Utils } from '../utils/utils'

export default function MainProducts() {
  const[selectedCategory, setSelectedCategory] = useState('')
  const[nextCategory, setNextCategory] = useState([])
  const[thisCategoryName, setThisCategoryName] = useState('')
  const[thisCategoryNameShow, setThisCategoryNameShow] = useState('')
  const[firstReq, setFirstReq] = useState(false)
  const products = useSelector(state => state.products.products)
  const[showProducts, setShowProducts] = useState([])
  const[showSortedProducts, setShowSortedProducts] = useState([])
  const[productsLoader, setProductsLoader] = useState(false)
  const categories = useSelector(state => state.categories.categories)


  const getCategoryProducts = async (category) => {
      setProductsLoader(true)
      setFirstReq(true)
      setShowSortedProducts([])
      const subCategories = Utils.getAllSubCategories(categories, category.name)
      const response = await ProductService.getProductsByCategoryId(category.id,subCategories)
      setShowProducts(response.data)
      setProductsLoader(false)
      const nextCategoryArray = Utils.getNextCategories(categories, category.name)
      if(nextCategoryArray.length !==0){
        setNextCategory(nextCategoryArray)
      }
      setThisCategoryName(category.parent && category.main_parent?category.parent:category.name)
      setThisCategoryNameShow(category.name)
      
    }
  const test = () =>{
    console.log(showSortedProducts)
  }
  const goBack = () =>{
    const category = Utils.getOneCategory(categories, thisCategoryName)
    setThisCategoryName(category[0].parent)
    const prevArray = Utils.getNextCategories(categories, category[0].parent)
    console.log(category)
    setNextCategory(prevArray)
  }
  const searchByQuery = async (query) =>{
    setProductsLoader(true)
    const response = await ProductService.getProductByQuery(query)
    setThisCategoryName('')
    setThisCategoryNameShow('Որոնման արդյունքները')
    console.log(response.data)
    setShowProducts(response.data)
    setProductsLoader(false)
  }
  const resetCategorySelect = async () =>{
    setProductsLoader(true)
    setShowProducts([])
    setShowSortedProducts([])
    setFirstReq(false)
    setThisCategoryNameShow('')
    setTimeout(() =>{
      setProductsLoader(false)
    }, 300)
 
  }

  return (
    products.length ===0
    ?<Loader/>
    :<div className='main_responsiv'>
      <div className='all_products_category_select'>
      
      {thisCategoryName && nextCategory.length !==0 &&<div onClick={goBack} className='all_products_category_select_back'>
       <img src='/img/undo.png' className='all_products_category_select_back_icon'  alt='back'/>
      <div className='all_products_category_select_back_text'>Վերադառնալ</div>
      </div>
      }
        <div className='all_products_category_select_categories'>
    
        <AllProductsCategorySelect array={selectedCategory && nextCategory.length !== 0?nextCategory:Utils.getMainCategories(categories)} resetCategorySelect={resetCategorySelect} setSelectedCategory={setSelectedCategory} getCategoryProducts={getCategoryProducts} />
        
        </div>
     
      </div>
      <div className='all_products_sort_container'> 
        <ProductSort setShowSortedProducts={setShowSortedProducts} products={products} showProducts={showProducts} setProductLoader={setProductsLoader}/>
      </div>
      <div className='all_products_container'>
        <div className='all_products_search_container'>
          <ProductSearch searchByQuery={searchByQuery}/>
        </div>
        
        {productsLoader
        ?<div className='all_products'>
        <BlockLoader/>
        </div>
        :showProducts.length ===0 && !firstReq
        ?<div className='all_products'>
          <div>{thisCategoryName}</div>
            {(showSortedProducts.length ===0?products:showSortedProducts).map(el =>(
              <ProductCard key={el.id} product = {el}/>
            ))}
          <button onClick={test}>test </button>
        </div>
        :<div className='all_products'>
          <div>{thisCategoryNameShow}</div>
            {(showSortedProducts.length ===0?showProducts:showSortedProducts).map(el =>(
           <ProductCard key={el.id} product = {el}/>
            ))}
            {showProducts.length ===0 && <div className='all_products_alert'>
                Այս բաժնում դեռ չկան հայտարարություններ
            </div>}
            
            <button onClick={test}>test </button>
        </div>
        }
       
     
      </div>
    </div>
  )
}
