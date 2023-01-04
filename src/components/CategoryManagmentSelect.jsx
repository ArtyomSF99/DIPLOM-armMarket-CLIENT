import React from 'react'
import AddCategoryProperty from './AddCategoryProperty'
import CreateCategory from './CreateCategory'
import DeleteCategory from './DeleteCategory'
import DeleteCategoryProperty from './DeleteCategoryProperty'
import UpdateCategory from './UpdateCategory'
import UpdateCategoryProperty from './UpdateCategoryProperty'

export default function CategoryManagmentSelect({id, category_id, parent, setGlobalParent}) {

  switch(id){
    case 1:
    return(
        <div className='management'>
            <CreateCategory parent={parent} setGlobalParent={setGlobalParent}/>
        </div>
    )
    case 2:
        return(
            <div className='management'>
                <UpdateCategory parent={parent} category_id={category_id} setGlobalParent={setGlobalParent}/>
            </div>
        )
    case 3:
    return(
        <div className='management'>
 
            <DeleteCategory parent={parent} setGlobalParent={setGlobalParent}/>
   
        </div>
    )
    case 4:
    return(
        <div className='management'>
            <AddCategoryProperty parent={parent} setGlobalParent={setGlobalParent}/>
        </div>
    )
    case 5:
        return(
            <div className='management'>
                <UpdateCategoryProperty parent={parent} setGlobalParent={setGlobalParent}/>
            </div>
        )
    case 6:
    return(
        <div className='management'>
            <DeleteCategoryProperty parent={parent} setGlobalParent={setGlobalParent}/>
        </div>
    )
    default:
        return(
            <div className='management'>
                Ընտրեք տարբերակը
            </div>
        )
  }  

}
