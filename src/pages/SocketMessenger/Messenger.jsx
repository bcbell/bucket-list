import React, { useState } from "react";
// import queryString from 'query-string';
// import useMessengerService from '../../useMessengerService'
// import Messages from '../../components/SocketChat/Messages/Messages';
import InfoBar from '../../components/SocketChat/InfoBar/InfoBar';

// import './Messenger.css';


// const Messenger = ({chatbox}) => {
//  
//   const {messages, sendMessage} = useMessengerService(chatbox);
//   const [newMessage, setNewMessages] = useState('');
import useChat from '../../useMessengerService'

// const Messenger = (props, user, room) => {
//   const [roomName, setRoomName] = useState('roomId');
//   const { roomId } = props.match.params.roomName  // Gets roomId from URL
//   const { messages, sendMessage } = useChat('chat'); // Creates a websocket and manages messaging
//   const [newMessage, setNewMessage] = useState(""); // Message to be sen

// //   const handleNewMessage=(event)=>{
// //     setNewMessages(event.target.value)
    
// //   }

// console.log({roomId})
// console.log(props.messages)
// console.log({messages})

// //   const handleSendMessage = () => {
// //     sendMessage(newMessage)
// //     setNewMessages(messages)
// //   }
// const handleNewMessageChange = (event) => {
//   setNewMessage(event.target.value);
// };

// const handleSendMessage = () => {
//   sendMessage(newMessage);
//   setNewMessage(messages);
// };
  
// console.log(newMessage)

//   return (
//     <div className="chat-room-container">
      
//       <h1 className="room-name">Room: {roomId}</h1>
//       <div className="messages-container">
//         <ol className="messages-list">
//           {/* {messages.map((message, i) => ( */}
//             <li
//               // key={i}
//               className={`message-item ${
//                 messages.ownedByCurrentUser ? "my-message" : "received-message"
//               }`}
//             >
//               {props.messages}
//             </li>
//            {/* ))}  */}
//         </ol>
//       </div>
//       <textarea
//         value={newMessage}
//         onChange={handleNewMessageChange}
//         placeholder="Write message..."
//         className="new-message-input-field"
//       />
//       <button onClick={handleSendMessage} className="send-message-button">
//         Send
//       </button>
//     </div>
//  );
  
// }
// export default Messenger;

// import React from "react";

// import "./ChatRoom.css";
// import useChat from '../../useMessengerService'

const Messenger = (props) => {
  const { roomId } = ('roomId') // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage('');
  };
console.log(props.messages)

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Room: {roomId}</h1>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {this.props.messages}
            </li>
          ))}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </div>
  );
};

export default Messenger;