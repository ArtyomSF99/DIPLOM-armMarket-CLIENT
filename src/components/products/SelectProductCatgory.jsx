import React, { useState } from 'react'
import MyProductCatgoryList from '../UI/list/MyProductCatgoryList'
import MyProductSecondCatgoryList from '../UI/list/MyProductSecondCategoryList'
import TextHeader from '../UI/textHeader/TextHeader'

export default function SelectProductCatgory() {
  const[arr, setArr] = useState([1,2,3,4])
  const[arr2, setArr2] = useState([1,2,3,4,5,6,7,8,9,10])
  const[nextCategory, setNextCategory] = useState(false)
  return (
    <div className="add_product_container">
    <TextHeader text="Ընտրեք կատեգորիան"/>
    <div className='select_add_product_category'>
      {nextCategory
      ? <MyProductCatgoryList array={arr} nextCategory={nextCategory} setNextCategory={setNextCategory}/>
      : <MyProductSecondCatgoryList array={arr2} nextCategory={nextCategory} setNextCategory={setNextCategory}/>}
     
    </div>
    </div>
  )
}
