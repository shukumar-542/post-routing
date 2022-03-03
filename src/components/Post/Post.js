import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
      const {title, body, id} = props.post
      const postStyle ={
            border : '1px solid purple',
            margin : '20px',
            padding : '20px'
      }
      return (
            <div style={postStyle}>
                  
                  <p>Title: {title}</p>
                  <p> Body : {body}</p>
                  <p>{id}</p>
                  <button><Link to={`/details/${id}`}>Show Details</Link></button>
            </div>
      );
};

export default Post;