import React from 'react'
import classes from './MyAvatar.module.css'

export default function MyAvatar({name, size}) {
  return (
    size ===1
    ?name && <div className={classes.avatar_container}>
    <div className={classes.avatar_char_smile}>
    <b>    {name[0].toUpperCase()}</b>

    </div>
    </div>
    :name && <div className={classes.avatar_container}>
    <div className={classes.avatar_char_large}>
    <b>
    {name[0].toUpperCase()}
    </b>
  
    </div>
    </div>
  )
}
