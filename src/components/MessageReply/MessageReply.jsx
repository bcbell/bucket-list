import React from "react";

const MessageCard = (props) => {
  return (
    <>
      <h3>
        {props.content}-{props.postedBy}
      </h3>
      <br />
    </>
  );
};

export default MessageCard;
