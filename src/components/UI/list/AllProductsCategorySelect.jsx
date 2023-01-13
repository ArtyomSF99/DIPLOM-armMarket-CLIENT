import React from 'react'
import classes from './MyList.module.css'
import { CSSTransition } from 'react-transition-group'

export default function AllProductsCategorySelect({array, categories, getCategoryProducts, setSelectedCategory}) {
  return (
    array.length === 0
    ?null
    :<CSSTransition in={true} key={array.length} timeout={0} classNames={classes.img_cont}>
       <div className={classes.category_list_container}>
    {array.map(el =>
    <div key={el.id} className={classes.category_list_item}>
        <button className={classes.list_button} onClick={() => {
          getCategoryProducts(el)
          setSelectedCategory(el.name)
          console.log('hello')}
        }>{el.name}</button>
    </div>
    )}
</div>
    </CSSTransition>
   
  )
}
