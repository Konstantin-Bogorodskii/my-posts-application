import React, { useState } from 'react';
import PostForm from './components/PostForm';

import PostList from './components/PostList';
import './styles/App.css';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ффф', body: '1213213123JavaScript - язык программирования' },
    { id: 2, title: 'gggg', body: 'aaaaJavaScript - язык программирования' },
    { id: 3, title: 'ббб', body: 'JavaScript -  программирования' },
  ]);

  const [sort, setSort] = useState('');
  const [searchInput, setSearchInput] = useState('');

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function deletePost(post) {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  function onChangeSort(sort) {
    setSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <PostForm createPost={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          placeholder="Поиск..."
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <MySelect
          value={sort}
          onChangeSort={onChangeSort}
          defaultValue="Сортировать по"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div>

      {posts.length !== 0 ? (
        <PostList posts={posts} title="Посты про JS" deletePost={deletePost} />
      ) : (
        <h1 style={{ textAlign: 'center', color: 'lightblue' }}>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;
