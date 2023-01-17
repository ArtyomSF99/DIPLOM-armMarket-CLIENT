import React, { useState } from 'react'
import { Utils } from '../../../utils/utils'
import TextHeader from '../textHeader/TextHeader'
import classes from './MyProductCatgoryList.module.css'


export default function MyProductCatgoryList({array, categories, setComponentPointer,setSelectedCategory}) {

  const next = (name) =>{
      const test = Utils.getNextCategories(categories, name)
      if(test.length ===0) {
        setComponentPointer(4)
        setSelectedCategory(name)
      }else{
        setComponentPointer(1)
        setSelectedCategory(name)
      }
  }

  return (
    <div className={classes.component_container}>
    <TextHeader text="Ապրանքի տեսակը"/>
    <div className={classes.list_container}>
         <ul className={classes.list3b}>
    {array.map(el =>
        <li key={el.id} onClick={() => next(el.name)}>{el.name}</li>  
    )}   
    </ul>
    
    </div>

    </div>
 
   
   
   
  )
}
