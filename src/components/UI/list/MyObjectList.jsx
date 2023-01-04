import React from 'react'
import classes from './MyObjectList.module.css'

export default function MyObjectList({object}) {
  return (
    
    
    <div className={classes.list_container}>
    {Object.keys(object).map(el => (
        
        object[el] && el !== 'id' && el !== 'category_id'
        ?<div key={el} className={classes.list_item}>
        <button className={classes.list_button}>{object[el]}</button>
        </div>
        :null
    )
    )}
   
    
</div>
  )
}
