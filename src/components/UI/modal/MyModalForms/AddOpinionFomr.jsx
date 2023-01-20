import React, { useState } from 'react'
import MyProductButton from '../../button/MyProductButton'
import MyInput from '../../input/MyInput'
import MyInput1 from '../../input/MyInput1'
import BlockLoader from '../../Loader/BlockLoader'
import classes from './MyModalForms.module.css'

export default function AddOpinionForm({addOpinion, addOpinionLoader, setAddOpinionLoader}) {
  const [comment, setComment] = useState('')

  return (
    addOpinionLoader
    ?<BlockLoader/>
    :<div className={classes.add_opinion_container}>
    <h5>Կիսվեք Ձեր փորձով</h5>
      <div className={classes.add_opinion_textarea}>
      <MyInput1 onChange={e=> setComment(e.target.value)} value={comment} inputname="Ձեր կարծիքը"  type='text' placeholder='Մուտքագրեք Ձեր կարծիքը...'/>

      </div>
      <MyProductButton onClick={() => {
        setAddOpinionLoader(true)
        addOpinion(comment)}}>Հաստատել</MyProductButton>
    </div>
  )
}
