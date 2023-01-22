import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { API_URL } from '../../http';
import MyProductButton from '../UI/button/MyProductButton';
import MyInput from '../UI/input/MyInput';
import MyInput1 from '../UI/input/MyInput1';
import ChatList from './ChatList';
import classes from './Chat.module.css'
import { useSelector } from 'react-redux';
import { Utils } from '../../utils/utils';


function MyChat2() {
    const [socket] = useState(socketio(`http://localhost:5001`));
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
     const senderId = 2
    const receiverId = 1
    const my_info = useSelector(state => state.user.user)
  
    useEffect(() =>{
      socket.emit('get_chat_messages', {senderId, receiverId})
    },[])
    useEffect(() => {
      // Join a room for the sender and receiver
      socket.emit('join', { senderId, receiverId });
  
      // Handle message event
      socket.on('send_message', (data) => {
        setMessages([...messages, data]);
      });
      socket.on("get_messages", (message) => {
           console.log(message);
         setMessages([...messages, message])
          // console.log(message); // world
        });
        socket.on("get_all_messages", (allMessages) => {
          console.log(allMessages);
          setMessages(allMessages)
         // console.log(message); // world
       });
      // return () => {
      //   socket.disconnect();
      // };
    }, [senderId, receiverId, messages]);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      // Send the message
      socket.emit('send_message', { 
          sender_id:senderId,
          receiver_id:receiverId,
          sender_name:`${my_info.first_name} ${my_info.last_name}`,
          sender_avatar_path: my_info.avatar_path || "",
          message:message,
          message_date: Utils.getMyDate(),
          message_time: Utils.getMyTime()
      })
  
      // Clear the message input
      setMessage('');
    }

  return (
    <div className={classes.selected_chat_container}>
    <div className={classes.chat_messages_container}>
      <ChatList messages={messages}/>
    </div>
    <form  className={classes.form_container} onSubmit={handleSubmit}>
    <div className={classes.form_input}>
    <MyInput1
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
      <div className={classes.form_btn}>
      <MyProductButton type="submit">Send</MyProductButton>
      </div>   
      
    </form>
    <button onClick={() => console.log(messages)}>test</button>
  </div>
  );
}
export default MyChat2;