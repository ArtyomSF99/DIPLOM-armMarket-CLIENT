import React, { useState } from 'react'
import { Utils } from '../../../utils/utils'
import MyButton from '../button/MyButton'
import TextHeader from '../textHeader/TextHeader'
import classes from './MyProductCatgoryList.module.css'


export default function MyProductThridCatgoryList({array, categories, selectedCategory, setComponentPointer,setSelectedCategory}) {
    
    const back = () =>{
        const back = categories.filter(el => el.name === selectedCategory)
        setSelectedCategory(back[0].parent)
        setComponentPointer(1)
    }


    return (
    <div className={classes.component_container}>
    <TextHeader text={selectedCategory}/>
    <div className={classes.list_container}>
         <ul className={classes.list3b}>
    {array.map(el =>
        <li key={el.id} onClick={() => {
        setComponentPointer(3)
        setSelectedCategory(el.name)}}>{el.name}</li>  
    )}   
    </ul>
    
    </div>
    <div className={classes.btns_container}>
          <button className={classes.back_btn} onClick={back}>Վերադառնալ հետ</button>
          <div className={classes.select_category}>
          <MyButton onClick={() => setComponentPointer(4)}>Հաստատել նեկա կատեգորիան</MyButton>
          </div>
          
    </div>
    </div>
 
   
   
   
  )
}
