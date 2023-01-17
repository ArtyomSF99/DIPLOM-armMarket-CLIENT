import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import CategoriesService from '../../services/CategoriesService'
import MyDisabledSubmit from '../UI/button/MyDisabledSubmit'
import MySubmit from '../UI/button/MySubmit'
import MyInput from '../UI/input/MyInput'

export default function UpdateCategory({category, setSelectedCategory}) {
    const[categoryName, setCategoryName] = useState('')
    const dispatch = useDispatch()
    
    const updateCategory = async () =>{
        const response = await CategoriesService.updateCategory(category.id,categoryName, category.name)
        dispatch({type:"SAVE_NEW_CATEGORY", payload:response.data[0]})
        console.log(response.data)
        setCategoryName('')
    }

  return (
    <div className='test10'>
        <div className='login_container'>
        <MyInput onChange={(e) => setCategoryName(e.target.value)} value={categoryName} name="category_name" inputname="Կատեգորիայի նոր անվանումը" type='text' placeholder='Մուտքագրեք կատեգորիայի նոր անվանումը...'/>
        </div>
        <div className='management_parent_info'>
           <div className='management_parent_info_header'>Փոփոխվող կատեգորիան:</div>
            <h3 className='management_parent_info_parent'>{category.name ?`${category.name}`: ' դաշտը դատարկ է'}</h3> 
            <div className='management_parent_info_clear'>
            <img onClick={() => setSelectedCategory({})} src='/img/remove.svg' width={'70%'} height={'100%'}/>  
            </div> 
              
    
        
        </div>
        
        <div className='management_button_container'>
            {categoryName.length=== 0 || !category.name
            ?<MyDisabledSubmit>Փոխել կատեգորիայի անվանումը</MyDisabledSubmit>
            :<MySubmit onClick={updateCategory}>Փոխել կատեգորիայի անվանումը</MySubmit>}
            
        </div>
       
    </div>
  )
}
