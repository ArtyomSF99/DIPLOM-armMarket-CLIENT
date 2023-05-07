import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import socketio from 'socket.io-client';
import { API_URL } from '../../http';
import UserService from '../../services/UserService';
import { Utils } from '../../utils/utils';
import MyProductButton from '../UI/button/MyProductButton';
import MyInput1 from '../UI/input/MyInput1';
import BlockLoader from '../UI/Loader/BlockLoader';
import classes from './Chat.module.css'
import ChatList from './ChatList';
//`https://diplom-arm-market-server.onrender.com`
function MyChat({ senderId, receiverId }) {
    const connectionOptions = {
        "force new connection": true,
        reconnectionAttempts: "Infinity",
        timeout: 60000,
        transports: ["websocket"],
      };
  const [socket] = useState(socketio(API_URL, connectionOptions));
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const my_info = useSelector(state => state.user.user)

  useEffect(() =>{
    setTimeout(() =>{
        socket.emit('get_chat_messages', {senderId, receiverId})
        socket.on("get_all_messages", (allMessages) => {
            if(allMessages.length === 0) {
                setIsLoading(false)
                return;
              } else {
                setMessages(allMessages);
                setIsLoading(false);
              }
         });
    },500)
   
  },[])
  useEffect(() => {
    // Join a room for the sender and receiver
    socket.emit('join', { senderId, receiverId });

    // Handle message event
    socket.on('send_message', (data) => {
      setMessages([...messages, data]);
    });
    socket.on('error', (error) => {
        console.error(error);
        // handle error here (e.g. display an error message to the user)
      });
    socket.on("get_messages", (message) => {
         console.log(message);
       setMessages([...messages, message])
        // console.log(message); // world
      });
      
    // return () => {
    //   socket.disconnect();
    // };
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(messages.length === 0){
        await UserService.createUserChat(receiverId, my_info.id, my_info.avatar_path || "", `${my_info.first_name} ${my_info.last_name}`)
     }
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
    {isLoading
    ?<div className={classes.selected_chat_loader}><BlockLoader/></div>
    :messages.length ===0
    ?<div className={classes.chat_messages_empty}>Այստեղ դեռ դատարկ է </div>
    :<div className={classes.chat_messages_container}>
    <ChatList my_info={my_info} messages={messages}/>
    </div>}
     
      <form  className={classes.form_container} onSubmit={handleSubmit}>
      <div className={classes.form_input}>
      <MyInput1
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
        <div className={classes.form_btn}>
        <MyProductButton type="submit">Ուղարկել</MyProductButton>
        </div>   
        
      </form>
    </div>
  );
}
export default MyChat;