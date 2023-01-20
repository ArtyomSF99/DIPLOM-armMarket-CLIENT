import React, { useState } from 'react'
import MyProductButton from '../../button/MyProductButton'
import MyInput1 from '../../input/MyInput1'
import BlockLoader from '../../Loader/BlockLoader'
import classes from './MyModalForms.module.css'

export default function EditOpinionForm(props) {
  const [editedOpinion, setEditedOpinion] = useState("")
  return (
    props.editOpinionLoader
    ?<div className={classes.edit_opinion_form_container}>
        <BlockLoader/>
    </div>
    : <div className={classes.edit_form_container}>
        <h5>{props.text}</h5>
      <MyInput1 onChange={(e) => setEditedOpinion(e.target.value)} value={editedOpinion}/>
      <div className={classes.edit_btn}>
      <MyProductButton onClick={() =>{
        props.setEditOpinionLoader(true)
        props.editOpinion(props.selectedObj, editedOpinion)
      }}>Հաստատել</MyProductButton>
      </div>
    
    </div>
  )
}
