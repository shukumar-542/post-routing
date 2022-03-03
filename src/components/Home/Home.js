import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
      const [posts, setPost] = useState([]);

      useEffect(() =>{
            const urls = 'https://jsonplaceholder.typicode.com/posts'
            fetch(urls)
            .then(res => res.json())
            .then(data => setPost(data))
      },[]);
      return (
            <div>
                 {
                       posts.map(post => <Post post={post}></Post>)
                 }
                  
            </div>
      );
};

export default Home;