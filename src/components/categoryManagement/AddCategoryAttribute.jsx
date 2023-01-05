import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import CategoriesService from '../../services/CategoriesService'
import MyDisabledSubmit from '../UI/button/MyDisabledSubmit'
import MySubmit from '../UI/button/MySubmit'
import MyInput from '../UI/input/MyInput'

export default function AddCategoryAttribute({category, setSelectedCategory}) {
  const[attribute, setAttribute] = useState('')
  const dispatch = useDispatch()
 
 

  const createAttribute = async() =>{
    const response = await CategoriesService.createAttribute(category.id, attribute)
    dispatch({type:"SAVE_NEW_ATTRIBUTE", payload:response.data[0]})
    console.log(response.data)
    setAttribute("")
  }

  return (
    <div className='test10'>
       <div className='management_parent_info'>
           <div className='management_parent_info_header'>Կատեգորիա:</div>
            <h3 className='management_parent_info_parent'>{category.name ?`${category.name}`: ' դաշտը դատարկ է'}</h3> 
            <div className='management_parent_info_clear'>
            <img onClick={() => setSelectedCategory({})} src='/img/remove.svg' width={'70%'} height={'100%'}/>  
            </div> 
        </div>
        <div className='login_container'>
        <MyInput onChange={(e) => setAttribute(e.target.value)} value={attribute} name="attribute" inputname="Արժեքի անվանումը" type='text' placeholder='Մուտքագրեք արժեքի անվանումը...'/>
        </div>
        <div className='management_button_container'>
            {attribute.length=== 0
            ?<MyDisabledSubmit style={{marginTop:'20%'}}>Ավելացնել արժեք</MyDisabledSubmit>
            :<MySubmit style={{marginTop:'20%'}} onClick={createAttribute}>Ավելացնել արժեք</MySubmit>}
            
        </div>
    </div>
  )
}
