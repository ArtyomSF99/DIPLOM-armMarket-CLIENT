import React, { useEffect, useState } from 'react'
import CategoriesService from '../services/CategoriesService'
import {useDispatch, useSelector} from "react-redux"
import { Utils } from '../utils/utils'
import TextHeader from '../components/UI/textHeader/TextHeader'
import MyList from '../components/UI/list/MyList'
import Loader from '../components/UI/Loader/Loader'
import MyManagementButton from '../components/UI/button/MyManagementButton'
import CategoryManagmentSelect from '../components/categoryManagement/CategoryManagmentSelect'
import MyAttributesList from '../components/UI/list/MyAttributesList'


export default function CategoryManagement() {
  const[mainCategories, setMainCategories] = useState([])
  const[secondCategories, setSecondCategories] = useState([])
  const[thridCategories, setThridCategories] = useState([])
  const[categoryAttributes, setCategoryAttributes] = useState([])
  const[attribute, setAttribute] = useState({})
  const[isLoading, setIsLoading] = useState(true)
  const[value, setValue] = useState(0)
  const[selectedCatgory, setSelectedCategory] = useState({})

  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.categories)
  const attributes = useSelector(state => state.categories.attributes)
  useEffect(() =>{
    
    CategoriesService.getCategories().then(response =>{
      
      dispatch({type:"SAVE_CATEGORIES", payload:response.data})
      setMainCategories(Utils.getMainCategories(response.data))
    }).then(() =>{
      CategoriesService.getAttributes().then(response =>{
        dispatch({type:"SAVE_ATTRIBUTES", payload:response.data})
      }).then(() =>setIsLoading(false))
    }).catch(e => console.log(e))
    
  }, [categories, dispatch])

  const test = () => {
   
    console.log(attribute)
  }

  const showSecondCategories = (category) =>{
    setSecondCategories(Utils.getNextCategories(categories, category.name))
    const selected_attributes = Utils.getCategoryAttributes(attributes, category.id)
    if(selected_attributes.length !== 0){
      setCategoryAttributes(selected_attributes)
    }else{
      setCategoryAttributes([])
    }
    setSelectedCategory(category)
    setThridCategories([])
  }

  const showThridCategories = (category) =>{
    setThridCategories(Utils.getNextCategories(categories, category.name))
    const selected_attributes = Utils.getCategoryAttributes(attributes, category.id)
    if(selected_attributes.length !== 0){
      setCategoryAttributes(selected_attributes)
    } else{
      setCategoryAttributes([])
    }
    setSelectedCategory(category)
  }
  const showProperties = (category) =>{
    const selected_attributes = Utils.getCategoryAttributes(attributes, category.id)
    if(selected_attributes.length !== 0){
      setCategoryAttributes(selected_attributes)
    } 
    else{
      setCategoryAttributes([])
    }
    setSelectedCategory(category)
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
      <MyAttributesList categoryAttributes={categoryAttributes} setAttribute={setAttribute} emptyText="Ստանդարտ արժեքներ չկան"/>

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
        <CategoryManagmentSelect id = {value} category={selectedCatgory} attribute={attribute} setAttribute={setAttribute} setSelectedCategory={setSelectedCategory}/>
      </div>
      </div>
     
     
      </div>
      <button onClick={test}>test</button>
      </div>
     
    
  )
}
