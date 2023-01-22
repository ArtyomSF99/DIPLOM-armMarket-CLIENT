import React, { useState } from 'react'
import MyAvatar from '../UI/avatar/MyAvatar'
import classes from './Chat.module.css'

export default function MyChatsList({chats, setSelectedChat, selectedChatIndex, setSelectedChatIndex}) {
   

  return (
    chats
    ?<div className={classes.chats_list_container}>
        {chats.map((chat, index) =>(
            <div key={chat.id} onClick={() => {
                setSelectedChat(chat)
                setSelectedChatIndex(index)
                }} className={index !== selectedChatIndex?classes.chat_contanier:classes.chat_container_selected}>
            <div  className={classes.chat_info_avatar}>
                {chat.user_avatar_path
                ?<img src='fasdf' alt='adsfadsf'/>
                :<MyAvatar name={chat.user_name} size={1}/>}
                </div>
                <div className={classes.chat_info_user_name}>
                   <b>
                   {chat.user_name}
                   </b> 
                </div>
            </div>
        ))}
    </div>
    :<div></div>
  )
}
