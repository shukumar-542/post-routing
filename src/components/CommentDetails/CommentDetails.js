import React from 'react';

const CommentDetails = (props) => {
      // console.log(props.comment);
      const {name,email,body} = props.comment
      return (
            <div>
                  <h4>Name : {name}</h4>
                  <p>Email : {email}</p>
                  <p>Comment : {body}</p>
                  
            </div>
      );
};

export default CommentDetails;