import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Post from './Post';

function PostList({ posts, title, deletePost }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center', color: 'lightblue' }}>Посты не найдены!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'lightblue' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          return (
            <CSSTransition key={index} timeout={500} classNames="post">
              <Post deletePost={deletePost} post={post} number={index + 1} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}

export default PostList;
