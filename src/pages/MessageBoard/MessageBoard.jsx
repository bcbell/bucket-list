import React, { Component } from "react";
import "./MessageBoard.css";

import {getMessages} from '../../services/api-calls'

class MessageBoard extends Component {
  state = {
    messages: [],
  };

  async componentDidMount() {
    const messages = await getMessages();
    this.setState({ messages});
  }
  

  render() {
      return(
          <div>
              <h1>Message Board</h1>
          </div>
      )
  }
}


export default MessageBoard;
