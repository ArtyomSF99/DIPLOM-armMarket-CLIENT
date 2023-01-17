import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesService from '../../services/CategoriesService'
import MySubmit from '../UI/button/MySubmit'

export default function DeleteCategoryAttribute({attribute, setAttribute}) {
  const dispatch = useDispatch()
  const attributes = useSelector(state => state.categories.attributes)

  const deleteCategoryInfo = async () =>{
    await CategoriesService.deleteAttribute(attribute.id)
    const newAttributes = attributes.filter(el => el.id !== attribute.id)
    dispatch({type:"SAVE_ATTRIBUTES", payload:newAttributes})
    setAttribute({})
  }


  return (
    <div className='test10'>
      <div style={{display:'flex', alignItems:'center', flexDirection:'column', justifyContent:'center', padding:'2%'}}>
        <h4>Ընտրեք այն կատեգորիան, որի արժեքներ ցանկանում եք ջնջել </h4>
      </div>
      <div className='management_parent_info'>
           <div className='management_parent_info_header'>Կատեգորիա:</div>
            <h3 className='management_parent_info_parent'>{attribute.attribute_name ?`${attribute.attribute_name}`: ' դաշտը դատարկ է'}</h3> 
            <div className='management_parent_info_clear'>
            <img onClick={() => setAttribute({})} src='/img/remove.svg' width={'70%'} height={'100%'}/>  
            </div> 
        </div>
        <div className='management_button_container'>
            
       
            <MySubmit onClick={deleteCategoryInfo}>Ջնջել արժեքներ</MySubmit>
            
        </div>
    </div>
  )
}
