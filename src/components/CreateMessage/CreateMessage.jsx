import React, { Component } from "react";


class CreateMessage extends Component {
  state = {
    formData: {
      content: "", //Has to match the input name
    },
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({ formData });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleMessagePost(this.state.formData);
    window.location.reload(true)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='content'
            value={this.state.formData.query}
            onChange={this.handleChange}
          />
          <button type='submit'>Post</button>
        </form>
      </div>
    );
  }
}

export default CreateMessage;
