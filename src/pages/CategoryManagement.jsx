import React, { useEffect, useState } from 'react'
import CategoriesService from '../services/CategoriesService'
import {useDispatch, useSelector} from "react-redux"
import { getMainCategories, Utils } from '../utils/utils'
import TextHeader from '../components/UI/textHeader/TextHeader'
import MyList from '../components/UI/list/MyList'
import Loader from '../components/UI/Loader/Loader'
import MyObjectList from '../components/UI/list/MyObjectList'
import MyManagementButton from '../components/UI/button/MyManagementButton'
import CategoryManagmentSelect from '../components/CategoryManagmentSelect'


export default function CategoryManagement() {
  const[mainCategoryQuery, setMainCategoryQuery] = useState("")
  const[secondCategoryQuery, setSecondCategoryQuery] = useState("")
  const[thirdCategoryQuery, setThirdCategoryQuery] = useState("")
  const[mainCategories, setMainCategories] = useState([])
  const[secondCategories, setSecondCategories] = useState([])
  const[thridCategories, setThridCategories] = useState([])
  const[properties, setProperties] = useState([]) 
  const[isLoading, setIsLoading] = useState(true)
  const[value, setValue] = useState(0)
  const[globalParent, setGlobalParent] = useState('')
  const[categoryId, setCategoryId] = useState(0)
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.categories)
  const categoriesInfo = useSelector(state => state.categories.categoriesInfo)
  useEffect(() =>{
    
    CategoriesService.getCategories().then(response =>{
      
      dispatch({type:"SAVE_CATEGORIES", payload:response.data})
      setMainCategories(Utils.getMainCategories(response.data))
    }).then(() =>{
      CategoriesService.getCategoriesInfo().then(response =>{
        dispatch({type:"SAVE_CATEGORIES_INFO", payload:response.data})
      }).then(() =>setIsLoading(false))
    }).catch(e => console.log(e))
    
  }, [categories, dispatch])

  const test = () => {
   
    console.log(categories)
  }

  const showSecondCategories = (parent, category_id) =>{
    setSecondCategories(Utils.getNextCategories(categories, parent))
    const category_prop = Utils.getCategoryInfo(categoriesInfo, category_id)
    if(category_prop.length !== 0){
      setProperties(category_prop[0])
    }else{
      setProperties({})
    }
    setGlobalParent(parent) 
    setCategoryId(category_id)
    setThridCategories([])
  }

  const showThridCategories = (parent, category_id) =>{
    setThridCategories(Utils.getNextCategories(categories, parent))
    const category_prop = Utils.getCategoryInfo(categoriesInfo, category_id)
    if(category_prop.length !== 0){
      setProperties(category_prop[0])
    } else{
      setProperties({})
    }
    setGlobalParent(parent)
    setCategoryId(category_id)  
  }
  const showProperties = (parent, category_id) =>{
    const category_prop = Utils.getCategoryInfo(categoriesInfo, category_id)
    if(category_prop.length !== 0){
      setProperties(category_prop[0])
    } 
    setGlobalParent(parent)
    setCategoryId(category_id)
    }


  return (
      isLoading
      ?<Loader/>
      :<div className='main_responsiv'>
      <div className='category_management'>
      <div className='show_categories'>
      <div className='show_categories_header'>
      <TextHeader text="Առկա կատեգորիաները"/>
      </div>
      <div className='category_headers'>
        <div className='category_header'>
          Առաջին կատեգորիա
        </div>
        <div className='category_header'>
          Երկրորդ կատեգորիա
        </div>
        <div className='category_header'>
          Երրորդ կատեգորիա
        </div>
        <div className='category_header'>
        Արժեքները՝ եթե կան
        </div>
      </div>
      <div className='show_categories_main'>
      <div className='show_categories_container'>
      <MyList array={mainCategories} showCategories={showSecondCategories} emptyText="Կատեգորիա չկա"/>
      </div>
      <div className='show_categories_container'>
        <MyList array={secondCategories} showCategories={showThridCategories} emptyText="Կատեգորիա չկա"/>

      </div>
      <div className='show_categories_container'>
      <MyList array={thridCategories} showCategories={showProperties} emptyText="Կատեգորիա չկա"/>

      </div>
      <div className='show_categories_container'>
      <MyObjectList object={properties} emptyText="Ստանդարտ արժեքներ չկան"/>

      </div>
      </div>
      
      </div>
      <TextHeader text="Կառավարում"/>
      <div className='category_management_moderator'>
      <div className='category_headers'>
        <MyManagementButton onClick={() => setValue(1)}>
          Ավելացնել կատեգորիա
        </MyManagementButton>
        <MyManagementButton onClick={() => setValue(2)}>
          Թարմացնել կատեգորիան
        </MyManagementButton>
        <MyManagementButton onClick={() => setValue(3)}>
          Ջնջել կատեգորիա
        </MyManagementButton>
        <MyManagementButton onClick={() => setValue(4)}>
          Ավելացնել կատեգորիայի արժեքներ
        </MyManagementButton>
        <MyManagementButton onClick={() => setValue(5)}>
          Թարմացնել կատեգորիայի արժեքները
        </MyManagementButton>
        <MyManagementButton onClick={() => setValue(6)}>
          Ջնջել կատեգորիայի արժեքները
        </MyManagementButton>
        
       
      </div>
      <div className='category_management_moderator_container'>
        <CategoryManagmentSelect id = {value} parent={globalParent} setGlobalParent={setGlobalParent} category_id={categoryId}/>
      </div>
      </div>
     
     
      </div>
      <button onClick={test}>test</button>
      </div>
     
    
  )
}
