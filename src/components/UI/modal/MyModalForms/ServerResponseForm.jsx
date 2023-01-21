import React from 'react'
import classes from './MyModalForms.module.css'


export default function ServerResponseForm({message}) {
  return (
    <div className={classes.server_response}>{message}</div>
  )
}
