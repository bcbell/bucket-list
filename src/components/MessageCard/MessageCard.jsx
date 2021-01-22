import React from "react";
import {Link} from 'react-router-dom'


const MessageCard = (props) => {
  return (
    <>
      <Link to={{ pathname: `/messageBoard/${props.id}`, state:{props} }}>
        {props.content}
        {/* -{props.postedBy} */}
      </Link>
      <br />
    </>
  );
};

export default MessageCard;
