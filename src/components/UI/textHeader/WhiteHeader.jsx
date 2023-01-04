import React from 'react'
import classes from './WhiteHeader.module.css'

export default function WhiteHeader({text}) {
  return (
    <h1 className={classes.tracking_in_expand}>{text}</h1>
  )
}
