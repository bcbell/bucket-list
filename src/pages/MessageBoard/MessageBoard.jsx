import React, { Component } from "react";
import {useHistory} from 'react-router-dom'
import "./MessageBoard.css";
import MessageCard from '../../components/MessageCard/MessageCard'
import MessageReply from '../../components/MessageReply/MessageReply'
import CreateMessage from '../../components/CreateMessage/CreateMessage'
import {getMessages, postMessage} from '../../services/api-calls'






class MessageBoard extends Component {
  state = {
    messages: [],
  };

  async componentDidMount() {
    const messages = await getMessages();
    this.setState({ messages });
  }
  handleMessagePost = async (formData) => {
    const post = await postMessage(formData);
    this.setState({ messages: post })
  };
  render() {
    return (
      <div>
        <h1>Message Board</h1>
        <CreateMessage handleMessagePost={this.handleMessagePost}/>
        <>
          {this.state.messages.map((m) => (
            <>
              <MessageCard key={m._id} content={m.content} postedBy={m.postedBy} id={m._id}/>
              {/* {m.replies.map((r) => (
                <MessageReply key={r._id} content={r.content} postedBy={r.postedBy} />
              ))} */}
            </>
          ))}
        </>
      </div>
    );
  }
}


export default MessageBoard;
