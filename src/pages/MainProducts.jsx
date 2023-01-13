import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/products/ProductCard'
import MyButton from '../components/UI/button/MyButton'
import MyProductButton from '../components/UI/button/MyProductButton'
import AllProductsCategorySelect from '../components/UI/list/AllProductsCategorySelect'
import MyList from '../components/UI/list/MyList'
import BlockLoader from '../components/UI/Loader/BlockLoader'
import Loader from '../components/UI/Loader/Loader'
import TextHeader from '../components/UI/textHeader/TextHeader'
import ProductService from '../services/ProductService'
import { Utils } from '../utils/utils'

export default function MainProducts() {
  const[selectedCategory, setSelectedCategory] = useState('')
  const[nextCategory, setNextCategory] = useState([])
  const[thisCategoryName, setThisCategoryName] = useState('')
  const[thisCategoryNameShow, setThisCategoryNameShow] = useState('')
  const[firstReq, setFirstReq] = useState(false)
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  const[showProducts, setShowProducts] = useState([])
  const[productsLoader, setProdctsLoader] = useState(false)
  const categories = useSelector(state => state.categories.categories)
 
  const getCategoryProducts = async (category) => {
      setProdctsLoader(true)
      setFirstReq(true)
      const subCategories = Utils.getAllSubCategories(categories, category.name)
      const response = await ProductService.getProductsByCategoryId(category.id,subCategories)
      setShowProducts(response.data)
      setProdctsLoader(false)
      const nextCategoryArray = Utils.getNextCategories(categories, category.name)
      if(nextCategoryArray.length !==0){
        setNextCategory(nextCategoryArray)
      }
      setThisCategoryName(category.parent && category.main_parent?category.parent:category.name)
      setThisCategoryNameShow(category.name)
    }
  const test = () =>{
    console.log(Utils.getAllSubCategories(categories, 'Էլեկտրոնիկա'))
  }
  const goBack = () =>{
    const category = Utils.getOneCategory(categories, thisCategoryName)
    setThisCategoryName(category[0].parent)
    const prevArray = Utils.getNextCategories(categories, category[0].parent)
    console.log(category)
    setNextCategory(prevArray)
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
    
        <AllProductsCategorySelect array={selectedCategory && nextCategory.length !== 0?nextCategory:Utils.getMainCategories(categories)} categories={categories} setSelectedCategory={setSelectedCategory} getCategoryProducts={getCategoryProducts} />
        
        </div>
     
      </div>
      <div className='all_products_container'>
        <div className='all_products_sort_container'>
          
        </div>
        {productsLoader
        ?<div className='all_products'>
        <BlockLoader/>
        </div>
        :showProducts.length ===0 && !firstReq
        ?<div className='all_products'>
          <div>{thisCategoryName}</div>
            {products.map(el =>(
              <ProductCard key={el.id} product = {el}/>
            ))}
          <button onClick={test}>test </button>
        </div>
        :<div className='all_products'>
          <div>{thisCategoryNameShow}</div>
            {showProducts.map(el =>(
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
