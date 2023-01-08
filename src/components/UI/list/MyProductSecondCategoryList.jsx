import React, { useState } from 'react'
import { Utils } from '../../../utils/utils'
import MyButton from '../button/MyButton'
import TextHeader from '../textHeader/TextHeader'
import classes from './MyProductCatgoryList.module.css'


export default function MyProductSecondCatgoryList({array,categories,selectedCategory, setComponentPointer,setSelectedCategory}) {
  const next = (name) =>{
    const test = Utils.getNextCategories(categories, name)
    if(test.length ===0) {
      setComponentPointer(4)
      setSelectedCategory(name)
    }else{
      setComponentPointer(2)
      setSelectedCategory(name)
    }
}

  return (
    <div className={classes.component_container}>
    <TextHeader text={selectedCategory}/>
    <div className={classes.list_container}>
         <ul className={classes.list3b}>
    {array.map(el =>
        <li key={el.id} onClick={() => next(el.name)}>{el.name}</li>  
    )}   
    </ul>
    
    </div>
    <div className={classes.btns_container}>
          <button className={classes.back_btn} onClick={() => {
            setComponentPointer(0)
            setSelectedCategory('')
            }}>Վերադառնալ հետ</button>
          <div className={classes.select_category}>
          <MyButton onClick={() => setComponentPointer(4)}>Հաստատել նեկա կատեգորիան</MyButton>
          </div>
          
    </div>
    </div>

   
   
  )
}
