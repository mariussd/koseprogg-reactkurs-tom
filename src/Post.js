import React from "react";
import "./styles.css";

const Post = (props) => {
  return (
    <div className="Post">
      <div className="PostTitle">
        <h2>{props.title}</h2>
        <h4>{props.date}</h4>
      </div>
      <div className="PostBody">
        <img src={props.image} alt={props.title} />
        <p className="PostText">{props.text}</p>
      </div>
    </div>
  );
};

export default Post;
