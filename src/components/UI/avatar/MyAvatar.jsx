import React from 'react'
import classes from './MyAvatar.module.css'

export default function MyAvatar({name}) {
  return (
    
    <div className={classes.avatar_container}>{name[0].toUpperCase()}</div>
  )
}
