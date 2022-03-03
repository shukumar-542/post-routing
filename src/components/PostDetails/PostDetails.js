import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

const PostDetails = () => {
     const {id} = useParams();
     const [post, setPost] = useState({});

     useEffect(()=>{
           const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
           fetch(url)
           .then(res => res.json())
           .then(data => setPost(data))
     },[])
     console.log(post);
     

     const postId = post.id;
    
      return (
            
            <div >

                  
                  <p>Post Title : {post.title}</p>
                  <p> Post Body : {post.body}</p>
                  
                  <Button  variant="contained"><Link to={`/comment/${postId}`}>Show Comment</Link></Button>
                  {/* <button><Link to={`/details/${id}`}>Show Details</Link></button> */}
            </div>
      );
};

export default PostDetails;