import React from 'react'
import MyInput from '../UI/input/MyInput'
import classes from './Products.module.css'

export default function AttributeInput({attribute, value, setValue, type}) {
  return (
    <div className={classes.attribute_input_container}>
        <div className={classes.attribute_header}>
        <b>{attribute.attribute_name}</b>
   
        </div>
        <div className={classes.attribute_input}>
        <MyInput onChange={(e) => setValue(e.target.value)} value={value} inputname="Լրացրեք դաշտը"  type={type? type:'text'} placeholder='Մինչև 20 նիշ...' maxLength="20"/>
        </div>
        
    </div>
  )
}
