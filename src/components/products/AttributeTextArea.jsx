import React from 'react'
import MyInput1 from '../UI/input/MyInput1'
import classes from './Products.module.css'

export default function AttributeTextArea({attribute, productDiscription, setProductDiscription}) {
  return (
    <div className={classes.attribute_input_textarea_container}>
        <div className={classes.attribute_header}>
        <b>{attribute.attribute_name}</b>
   
        </div>
        <div className={classes.attribute_input_textarea}>
        <MyInput1 onChange={(e) => setProductDiscription(e.target.value)} value={productDiscription} inputname="Լրացրեք դաշտը"  type='text' placeholder='Լրացրեք նկարագրությունը․․․'/>
        </div>
        
    </div>
  )
}
