import React from 'react'
import classes from './MyAvatar.module.css'

export default function MyAvatar({name}) {
  return (
    
    name && <div className={classes.avatar_container}>{name[0].toUpperCase()}</div>
  )
}
