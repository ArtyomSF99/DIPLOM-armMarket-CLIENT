import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { API_URL } from '../../http';

function MyChat({ senderId, receiverId }) {
  const [socket] = useState(socketio(`http://localhost:5001`));
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Join a room for the sender and receiver
    socket.emit('join', { senderId, receiverId });

    // Handle message event
    socket.on('send_message', (data) => {
      setMessages([...messages, data]);
    });
    socket.on("get_messages", (...message) => {
        console.log(message); // world
      });
    return () => {
      socket.disconnect();
    };
  }, [senderId, receiverId, messages]);

  function handleSubmit(e) {
    e.preventDefault();

    // Send the message
    socket.emit('send_message', { senderId, receiverId, message });

    // Clear the message input
    setMessage('');
  }

  return (
    <div>
      <ul>
        {messages.map((message) => (<li key={message.id}>{message.message}</li>
      ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
export default MyChat;