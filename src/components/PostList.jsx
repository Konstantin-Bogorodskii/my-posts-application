import React from 'react';
import Post from './Post';
function PostList({ posts, title }) {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'lightblue' }}>{title}</h1>
      {posts.map(post => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
}

export default PostList;
