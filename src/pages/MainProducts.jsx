import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/products/ProductCard'
import ProductList from '../components/products/ProductList'
import ProductSearch from '../components/products/ProductSearch'
import ProductSort from '../components/products/ProductSort'

import AllProductsCategorySelect from '../components/UI/list/AllProductsCategorySelect'

import BlockLoader from '../components/UI/Loader/BlockLoader'
import Loader from '../components/UI/Loader/Loader'
import MyModal from '../components/UI/modal/MyModal'
import ConfirmForm from '../components/UI/modal/MyModalForms/ConfirmForm'
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
  const[selectedObj, setSelectedObj] = useState({})
  const[deleteProductModal, setDeleteProductModal] = useState(false)
  const[deleteProductLoader, setDeleteProductLoader] = useState(false)
  const categories = useSelector(state => state.categories.categories)
  const dispatch = useDispatch()

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
    const deleteProduct = async (product) =>{
      const product_id = product.id
      const product_folder = product.product_folder
      const category_id = product.product_category_id
      console.log(product)
      
      const response =  await ProductService.deleteProduct(product_id, product_folder, category_id)
      if(response.status === 200) {
          dispatch({type:"SET_SERVER_RESPONSE", payload:"Ձեր հայտարարությունը հաջողությամբ ջնջված է"})
          dispatch({type:"CHANGE_GLOBAL_MODAL", payload:true})
          const newProducts = products.filter(el => el.id !== product.id)
          dispatch({type:"SAVE_PRODUCTS", payload:newProducts})
      }
      console.log(response)
      setSelectedObj({})
      setDeleteProductLoader(false)
      setDeleteProductModal(false)
     }
  
  const test = () =>{
    console.log(products)
    
    console.log(showProducts)
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
        <ProductSort showSortedProducts={showSortedProducts} setShowSortedProducts={setShowSortedProducts} products={products} showProducts={showProducts} setProductLoader={setProductsLoader}/>
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
            {(showSortedProducts.length ===0
            ?<ProductList productArray={products} setSelectedObj={setSelectedObj} setDeleteProductModal={setDeleteProductModal}/>
            :<ProductList productArray={showSortedProducts} setSelectedObj={setSelectedObj} setDeleteProductModal={setDeleteProductModal}/>)}
          <button onClick={test}>test </button>
        </div>
        :<div className='all_products'>
          <div>{thisCategoryNameShow}</div>
            {(showSortedProducts.length ===0
            ?<ProductList productArray={showProducts} setSelectedObj={setSelectedObj} setDeleteProductModal={setDeleteProductModal}/>
            :<ProductList productArray={showSortedProducts} setSelectedObj={setSelectedObj} setDeleteProductModal={setDeleteProductModal}/>
            )}
            {showProducts.length ===0 && <div className='all_products_alert'>
                Այս բաժնում դեռ չկան հայտարարություններ
            </div>}
        </div>
        }
       
     
      </div>
      <MyModal  visible={deleteProductModal} setVisible={setDeleteProductModal}>
      <ConfirmForm text="Ցանկանու՞մ եք ջնջել Ձեր Հայտարարությունը" selectedObj={selectedObj} modalAnswerYes={deleteProduct} deleteProductLoader={deleteProductLoader} setDeleteLoader={setDeleteProductLoader} modalAnswerNo={setDeleteProductModal}/>
    </MyModal>
    </div>
  )
}
