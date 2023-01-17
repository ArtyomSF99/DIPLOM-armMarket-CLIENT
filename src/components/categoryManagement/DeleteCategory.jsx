import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesService from '../../services/CategoriesService'
import MySubmit from '../UI/button/MySubmit'

export default function DeleteCategory({category, setSelectedCategory}) {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.categories)

  const deleteCategory = async () =>{
    await CategoriesService.deleteCategory(category.id, category.name)
    const newCategories = categories.filter(el => el.name !== category.name && el.parent !==category.name && el.main_parent !==category.name)
    dispatch({type:"SAVE_CATEGORIES", payload:newCategories})
    setSelectedCategory({})
  }


  return (
    <div className='test10'>
      <div style={{display:'flex', alignItems:'center', flexDirection:'column', justifyContent:'center', padding:'2%'}}>
        <h3>Ընտրեք այն կատեգորիան, որը ցանկանում եք ջնջել </h3>
        <div style={{color:'red', fontSize:'4vh', padding:'2%'}}>ՈՒշադրություն։Եթե կատեգորիան պարունակում է ենթակարգեր, ապա ենթակարգերը նույնպես կջնջվեն</div>
      </div>
      <div className='management_parent_info'>
           <div className='management_parent_info_header'>Մայր կատեգորիա:</div>
            <h3 className='management_parent_info_parent'>{category.name ?`${category.name}`: ' դաշտը դատարկ է'}</h3> 
            <div className='management_parent_info_clear'>
            <img onClick={() => setSelectedCategory({})} src='/img/remove.svg' width={'70%'} height={'100%'}/>  
            </div> 
        </div>
        <div className='management_button_container'>
            
       
            <MySubmit onClick={deleteCategory}>Ջնջել կատեգորին</MySubmit>
            
        </div>
    </div>
  )
}
