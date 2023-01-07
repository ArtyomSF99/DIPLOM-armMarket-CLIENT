import React, { useState } from 'react'
import MyInput from '../UI/input/MyInput'
import classes from './Products.module.css'

export default function AttributesInput({attribute, readyAttributes, setReadyAttributes}) {
    const[value, setValue] = useState('')

    const valueChange = (e) => {
        const res = readyAttributes.filter(el => el.attribute.id !== attribute.id)
        const obj = {attribute:attribute, attribute_value:e.target.value}
        res.push(obj)
        setValue(e.target.value)
        setReadyAttributes(res)
    }

  return (
    <div className={classes.attribute_input_container}>
        <div className={classes.attribute_header}>
        <b>{attribute.attribute_name}</b>
   
        </div>
        <div className={classes.attribute_input}>
        <MyInput onChange={valueChange} value={value} inputname="Լրացրեք դաշտը"  type='text' placeholder='Մինչև 20 նիշ...' maxLength="20"/>
        </div>
        
    </div>
  )
}
