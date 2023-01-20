import React from 'react'
import { useSelector } from 'react-redux'
import MyAvatar from '../UI/avatar/MyAvatar'
import classes from './User.module.css'

export default function CommentList({user, opinions, setDeleteOpinionModal,setEditOpinionModal,setSelectedObj}) {
    const my_info = useSelector(state => state.user.user)
  return (
    <div className={classes.comment_list_container}>
        {opinions && 
        opinions.map(el =>(
            <div key={el.id} className={classes.comment_block}>
        {my_info.id === el.sender_user_id &&
        <div className={classes.comment_btns}>
        <img onClick={() => {
            setEditOpinionModal(true)
            setSelectedObj(el)}} className={classes.comment_edit} src='/img/editing.png' alt='edit'/>
        <img onClick={() => {
            setDeleteOpinionModal(true)
            setSelectedObj(el)}} className={classes.comment_delete} src='/img/delete.png' alt='edit'/>
        </div>
        }
        
          <div className={classes.comment_avatar}>
            <MyAvatar name={el.user_name} size={1}/>
          </div>
          <div className={classes.comment_body}>
          <div className={classes.comment_sender_name}>
                {el.user_name}
            </div>
            <pre className={classes.comment_text}>
                {el.opinion}
                </pre>
        <div className={classes.comment_exhibition_time}>
            {`${el.exhibition_date} ${el.exhibition_time}`}
        </div>    
          </div>
            
        </div>
        ))
        }
    </div>
  )
}
