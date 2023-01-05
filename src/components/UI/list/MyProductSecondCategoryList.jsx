import React, { useState } from 'react'
import classes from './MyProductCatgoryList.module.css'


export default function MyProductSecondCatgoryList({array, nextCategory,setNextCategory}) {
    const[test,setTest] =useState(true)
  return (
 
    <div className={classes.list_container}>
         <ul className={classes.list3b}>
    {array.map(el =>
        <li onClick={() => {
        setNextCategory(!nextCategory)
        setTest(!test)}}>Элемент  списка</li>  
    )}   
    </ul>
    
    </div>
  

   
   
  )
}
