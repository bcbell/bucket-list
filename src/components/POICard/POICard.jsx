import React from "react";
import {Link} from 'react-router-dom'

const POICard = (props) => {
  return (
    <>
      <Link
        style={{ color: "white", fontSize:'35px' }}
        to={{ pathname: `/search/${props.id}` }}
      >
        {props.POI}
      </Link>
      <h4>{props.snippet}</h4>
      <br />
    </>
  );
};

export default POICard;
