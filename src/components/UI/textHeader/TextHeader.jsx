import React from 'react'
import classes from './TextHeader.module.css'

export default function TextHeader({text}) {
  return (
    <h1 className={classes.tracking_in_expand}>{text}</h1>
  )
}
