import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { CSSTransition } from 'react-transition-group'
import MyChat from '../components/chat/MyChat'
import MyChatsList from '../components/chat/MyChatsList'
import LoaderFullScreen from '../components/UI/Loader/LoaderFullScreen'
import UserService from '../services/UserService'

export default function MyChats() {
    const[chats, setChats] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const[selectedChat, setSelectedChat] = useState({})
    const[selectedChatIndex, setSelectedChatIndex] = useState(0)
    
    const my_info = useSelector(state => state.user.user)
    useEffect(() =>{
        UserService.getUserChats(my_info.id).then(response => {
            setChats(response.data)
            setIsLoading(false)
            console.log(response.data)
            const queryParameters = new URLSearchParams(window.location.search)
            const chat_id = queryParameters.get("chat_id")
            console.log(chat_id)
            const test_chat = response.data.filter(el => el.user_id === Number(chat_id))
            if(test_chat.length !==0){
                setSelectedChatIndex(response.data.findIndex(el => el.id === Number(chat_id)))
                setSelectedChat(test_chat[0])
            }
        
        })
      
    },[])

  return (
    isLoading
    ?<LoaderFullScreen/>
    :<div className='main_responsiv'>
    <div className='my_chats_page_container'>
    <div className='my_chats_container'>
    <MyChatsList chats={chats} selectedChatIndex={selectedChatIndex} setSelectedChatIndex={setSelectedChatIndex} setSelectedChat={setSelectedChat}/>
    </div>
    <CSSTransition in={true} key={Date.now()} timeout={0} >
    <div className='my_selected_chat'>
    {chats.length !==0 && 
        
        <MyChat senderId={Object.keys(selectedChat).length === 0?chats[0].my_id:selectedChat.my_id} receiverId={Object.keys(selectedChat).length === 0?chats[0].user_id:selectedChat.user_id}/>
    
    }

    </div>
    </CSSTransition>
    </div>
      <button onClick={() => console.log()}>test</button>
    </div>
  )
}
