import React from 'react'
import classes from './MyList.module.css'

export default function MyList({array, showCategories, emptyText}) {
  return (
    array.length === 0
    ?<div className={classes.alert}>
        {emptyText}
    </div>
    :<div className={classes.list_container}>
    {array.map(el =>
    <div key={el.id} className={classes.list_item}>
        <button className={classes.list_button} onClick={() => showCategories(el.name, el.id)}>{el.name}</button>
    </div>
    )}
</div>
  )
}
