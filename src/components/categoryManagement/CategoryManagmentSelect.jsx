import React from 'react'
import AddCategoryAttribute from './AddCategoryAttribute'
import CreateCategory from './CreateCategory'
import DeleteCategory from './DeleteCategory'
import DeleteCategoryAttribute from './DeleteCategoryAttribute'
import UpdateCategory from './UpdateCategory'
import UpdateCategoryProperty from './UpdateCategoryAttribute'

export default function CategoryManagmentSelect({id, category, setSelectedCategory, attribute, setAttribute}) {

  switch(id){
    case 1:
    return(
        <div className='management'>
            <CreateCategory category={category} setSelectedCategory={setSelectedCategory}/>
        </div>
    )
    case 2:
        return(
            <div className='management'>
                <UpdateCategory category={category} category_id={category.category_id} setSelectedCategory={setSelectedCategory}/>
            </div>
        )
    case 3:
    return(
        <div className='management'>
 
            <DeleteCategory category={category} setSelectedCategory={setSelectedCategory}/>
   
        </div>
    )
    case 4:
    return(
        <div className='management'>
            <AddCategoryAttribute category={category} setSelectedCategory={setSelectedCategory}/>
        </div>
    )
    case 5:
        return(
            <div className='management'>
                <UpdateCategoryProperty attribute={attribute} setAttribute={setAttribute}/>
            </div>
        )
    case 6:
    return(
        <div className='management'>
            <DeleteCategoryAttribute attribute={attribute} setAttribute={setAttribute}/>
        </div>
    )
    default:
        return(
            <div className='management'>
            <div className='test10'>
            Ընտրեք տարբերակը
            </div>
                
            </div>
        )
  }  

}
