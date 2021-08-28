import React from 'react';
import Post from './Post';
function PostList({ posts, title, deletePost }) {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'lightblue' }}>{title}</h1>
      {posts.map((post, index) => {
        return <Post deletePost={deletePost} post={post} key={index} number={index + 1} />;
      })}
    </div>
  );
}

export default PostList;
