import React, { useState } from 'react';

import PostList from './components/PostList';
import './styles/App.css';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript - язык программирования' },
    { id: 2, title: 'JavaScript1', body: 'JavaScript - язык программирования' },
    { id: 3, title: 'JavaScript2', body: 'JavaScript - язык программирования' },
  ]);

  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  const addNewPost = e => {
    e.preventDefault();

    setPosts([...posts, { ...post, id: new Date() }]);
    setPost({
      title: '',
      body: '',
    });
  };

  return (
    <div className="App">
      <form>
        <MyInput
          onChange={e => setPost({ ...post, title: e.target.value })}
          value={post.title}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Добавить Пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
