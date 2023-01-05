import React from 'react'
import classes from './MyAttributesList.module.css'

export default function MyAttributesList({categoryAttributes, setAttribute, emptyText}) {
  return (
    categoryAttributes.length === 0
    ?<div className={classes.alert}>
        {emptyText}
    </div>
    :<div className={classes.list_container}>
    {categoryAttributes.map(el =>
    <div key={el.id} className={classes.list_item}>
        <button className={classes.list_button} onClick={() => setAttribute(el)}>{el.attribute_name}</button>
    </div>
    )}
</div>
  )
}
