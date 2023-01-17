import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Utils } from '../../utils/utils'
import MyProductCatgoryList from '../UI/list/MyProductCatgoryList'
import MyProductSecondCatgoryList from '../UI/list/MyProductSecondCategoryList'
import MyProductThridCatgoryList from '../UI/list/MyProductThridCategoryList'
import TextHeader from '../UI/textHeader/TextHeader'
import AddNewProduct from './AddNewProduct'

export default function SelectProductCatgory({setSelected, setSelectedCategory, selectedCategory}) {
  const[arr, setArr] = useState([1,2,3,4])
  const[arr2, setArr2] = useState([1,2,3,4,5,6,7,8,9,10])
  const[componentPointer, setComponentPointer] = useState(0)
  const[nextCategory, setNextCategory] = useState(false)
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.categories)
  const attributes = useSelector(state => state.categories.attributes)
  const mainCategories = Utils.getMainCategories(categories)
  const secondCategories = Utils.getNextCategories(categories, selectedCategory)

  switch(componentPointer){
    case 0:
      return <MyProductCatgoryList array={mainCategories} categories={categories} setComponentPointer={setComponentPointer} setSelectedCategory={setSelectedCategory} />
    case 1:
      return <MyProductSecondCatgoryList array={secondCategories} categories={categories} selectedCategory={selectedCategory}  setComponentPointer={setComponentPointer} setSelectedCategory={setSelectedCategory}/>
    case 2:
      return <MyProductThridCatgoryList array={secondCategories} categories={categories} selectedCategory={selectedCategory} setComponentPointer={setComponentPointer} setSelectedCategory={setSelectedCategory}/>
    default:
      return <AddNewProduct categories={categories} attributes={attributes} selectedCategory={selectedCategory}/>
    }
}
