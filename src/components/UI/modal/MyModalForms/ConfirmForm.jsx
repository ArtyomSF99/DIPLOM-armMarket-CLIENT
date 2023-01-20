import React from 'react'
import BlockLoader from '../../Loader/BlockLoader'
import classes from './MyModalForms.module.css'

export default function ConfirmForm(props) {
  return (
    props.deleteOpinionLoader
    ?<div className={classes.confirm_form_container}>
        <BlockLoader/>
    </div>
    :<div className={classes.confirm_form_container}>
        <h3>{props.text}</h3>
        <div className={classes.confirm_btns}>
        <button onClick={() => {
            props.setDeleteOpinionLoader(true)
            props.modalAnswerYes(props.selectedObj)}} className={classes.yes_btn}>Այո</button>
        <button onClick={() =>props.modalAnswerNo(false)} className={classes.no_btn}>Ոչ</button>
        </div>

    </div>
  )
}
