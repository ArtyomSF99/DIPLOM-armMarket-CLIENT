import React, { useState } from 'react'
import { useParams } from 'react-router'
import MyButton from '../UI/button/MyButton'
import MyProductButton from '../UI/button/MyProductButton'
import MyModal from '../UI/modal/MyModal'
import CommentList from './CommentList'
import classes from './User.module.css'

export default function ProfileOpinion({user,opinions, setAddOpinionModal, setEditOpinionModal, setDeleteOpinionModal, setSelectedObj}) {


  return (
  
    <div className={classes.user_opinions}>
       {user && <h5>Կարծիքներ <b>{`${user.first_name} ${user.last_name}`}</b> -ի մասին </h5>} 
       <div style={{marginTop:'1em'}}>
       <MyProductButton onClick={() =>setAddOpinionModal(true)}>Ավելացնել Կարծիք</MyProductButton>
       </div>
     
          <CommentList user={user} opinions={opinions} setEditOpinionModal={setEditOpinionModal} setDeleteOpinionModal={setDeleteOpinionModal} setSelectedObj={setSelectedObj}/>
          
       
          
          <button onClick={() => console.log(user)}>test</button>
    </div> 
    
  
  )
}
