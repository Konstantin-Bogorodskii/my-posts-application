import React from 'react';
import Post from './Post';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function PostList({ posts, title, deletePost }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center', color: 'lightblue' }}>Посты не найдены!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'lightblue', margin: '15px 0' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          return (
            <CSSTransition key={post.id} timeout={{ enter: 500, exit: 500 }} classNames="post">
              <Post deletePost={deletePost} post={post} number={index + 1} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}

export default PostList;
