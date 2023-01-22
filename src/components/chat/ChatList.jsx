import React from 'react'
import { Link } from 'react-router-dom'
import MyAvatar from '../UI/avatar/MyAvatar'
import BlockLoader from '../UI/Loader/BlockLoader'
import classes from './Chat.module.css'

export default function ChatList({my_info, messages}) {

  return (
    messages
    ?<div className={classes.chat_list_container}>
        {messages &&
        messages.map(message => (
            my_info.id === message.sender_id
            ?<div key={message.id} className={classes.message_container}>
                <div className={classes.message_info}>
            
                
                </div>
                <div className={classes.message_body}>
                    <pre className={classes.message_body_message}>
                    {message.message}
                    </pre>
                    <div className={classes.message_date}>
                        {`${message.message_time} ${message.message_date}`}
                    </div>
                </div>
               
            </div>
            :<div key={message.id} className={classes.message_container}>
                <div className={classes.message_info}>
                <div className={classes.message_info_avatar}>
                {message.sender_avatar_path
                ?<img src='fasdf' alt='adsfadsf'/>
                :<MyAvatar name={message.sender_name} size={1}/>}
                </div>
                
                </div>
                <div className={classes.message_body}>
                <Link className='link' to={`/user-profile/${message.sender_id}`}>
                <div className={classes.message_sender_name}>
                    {message.sender_name}
                    </div>
                </Link>
                 
                    <pre className={classes.message_body_message}>
                    {message.message}
                    </pre>
                    <div className={classes.message_date}>
                        {`${message.message_time} ${message.message_date}`}
                    </div>
                </div>
               
            </div>
        ))
        }
    </div>
    :<div>
        <BlockLoader/>
    </div>
  )
}
