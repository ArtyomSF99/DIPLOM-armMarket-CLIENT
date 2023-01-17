import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import CategoriesService from '../../services/CategoriesService'
import MyDisabledSubmit from '../UI/button/MyDisabledSubmit'
import MySubmit from '../UI/button/MySubmit'
import MyInput from '../UI/input/MyInput'

export default function UpdateCategoryAttribute({attribute, setAttribute}) {
    const[newAttributeName, setNewAttributeName] = useState('')
    const dispatch = useDispatch()
    
    const changeProperty = async () =>{
        const response = await CategoriesService.updateAttribute(attribute.id, newAttributeName)
       // dispatch({type:"SAVE_NEW_ATTRIBUTE", payload:response.data[0]})
        setNewAttributeName('')
        setAttribute({})
    }

  return (
    <div className='test10'>
     <div className='login_container'>
        <MyInput onChange={(e) => setNewAttributeName(e.target.value)} value={newAttributeName} name="new_attribute_name" inputname="Արժեքի նոր անվանումը" type='text' placeholder='Մուտքագրեք արժեքի նոր անվանումը...'/>
        </div>
         <div className='management_parent_info'>
           <div className='management_parent_info_header'>Արժեքը:</div>
            <h3 className='management_parent_info_parent'>{attribute.attribute_name ?`${attribute.attribute_name}`: ' դաշտը դատարկ է'}</h3> 
            <div className='management_parent_info_clear'>
            <img onClick={() => setAttribute({})} src='/img/remove.svg' width={'70%'} height={'100%'}/>  
            </div> 
        </div>
        <div className='management_button_container'>
            {newAttributeName.length=== 0
            ?<MyDisabledSubmit>Փոխել արժեք</MyDisabledSubmit>
            :<MySubmit onClick={changeProperty}>Փոխել արժեք</MySubmit>}
            
        </div>
    </div>
  )
}
