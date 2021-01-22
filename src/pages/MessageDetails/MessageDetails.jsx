import React, { Component } from "react";
import { getMessageDetails, postReply } from "../../services/api-calls";
import CreateReply from '../../components/CreateReply/CreateReply'
class MessageDetails extends Component {
  state = {
    messageDetails: {},
  };

  async componentDidMount() {
    const messageDetails = await getMessageDetails(this.props.match.params.id);
    console.log(messageDetails, "this is message details");
    this.setState({ messageDetails });
  }

  handleReplyPost = async (formData, id) => {
    const reply = await postReply(formData, id);
    // this.setState({ messageDetails: reply });
    this.props.history.push(`/messageBoard/${id}`)
  };


  render() {
    return (
        
      <div>
        {this.state.messageDetails.content ? (
          <div>
            <h1 style={{ color: "wheat", textAlign: "center" }}>
              {this.state.messageDetails.content}
            </h1>
            <CreateReply
              handleReplyPost={this.handleReplyPost}
              user={this.props.user}
              id={this.state.messageDetails._id}
            />
            {this.state.messageDetails.replies.map((r) => (
              <>
                <h5 key={r._id}>{r.content}</h5>
              </>
            ))}
          </div>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    );
  }
}

export default MessageDetails;
