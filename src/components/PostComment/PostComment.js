import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetails from '../CommentDetails/CommentDetails';

const PostComment = () => {
      const {postId} = useParams();
      const [comments , setComment] = useState([{}]);

      useEffect(()=>{
            const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
            fetch(url)
            .then(res => res.json())
            .then(data => setComment(data));
      },[])
      // console.log(comment);
      // const {} = comment
      return (
            <div>
                  
                  {
                        comments.map(comment => <CommentDetails comment ={comment}></CommentDetails>)
                  }
                  
            </div>
      );
};

export default PostComment;