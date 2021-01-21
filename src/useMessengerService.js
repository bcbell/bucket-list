// import { useEffect, useRef, useState } from "react";
// import socketIOClient from "socket.io-client";
// import authService from './services/authService'

// const SOCKET_SERVER_URL = "http://localhost:3001";
// const newMessageEvent = "receiveMessage";

// const useMessengerService = (chatbox) => {
//   const [messages, setMessages] = useState([]);
//   const socketRef = useRef();
  
//   const d = new Date()
 
//   useEffect(() => {
//     let user = authService.getUser()
    

//     socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
//       query: { messages: [messages.body], chatbox, user: [user.name, user._avatar, user._id]},
//     });

//     socketRef.current.on(newMessageEvent, (message) => {
//       const incomingMessage = {
//         ...message,
//         sentByCurrentUser: message.senderId === socketRef.current.id,
//       };
//       setMessages((messages) => [...messages, incomingMessage]);
//     });

//     socketRef.current.on('disconnect', (data) => {
//       console.log('Unable to connect, please check connection');
//     });


//     return () => {
//       socketRef.current.disconnect();
//     };
//   }, [chatbox]);


  
//   const sendMessage = (messageBody) => {
//     let user = authService.getUser()
//     socketRef.current.emit(newMessageEvent, {
//       body: messageBody,
//       userId: user._id,
//       avatar: user._avatar,
//       name: user.name,
//       senderId: socketRef.current.id,
//       timestamp: d.toUTCString()
      
//     });
//   };

//   return { messages, sendMessage };



// };

// export default useMessengerService;


import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
const SOCKET_SERVER_URL = "http://localhost:4000";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]); // Sent and received messages
  const socketRef = useRef();

  useEffect(() => {
    
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });
    
    // Listens for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });
    
    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  return { messages, sendMessage };
};

export default useChat;