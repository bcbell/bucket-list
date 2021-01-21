import { MessageSharp } from '@material-ui/icons';
import React from 'react';
import './Messages.css';


const Message = ({messages, name}) => {

  let isSentByCurrentUser = false;
  
 const date =new Date()

  if (name) {
    isSentByCurrentUser = true;
  }
  return (
  <>
 
   <h2>Conversation: {name.name} & {!name.name} </h2>
   {/* {names.map((time, message)=>( */}
    <div>
  
      <h1>{messages}{messages}</h1>
  
    </div>
    
   {/* ))}   */}
    </>
        )}
export default Message;