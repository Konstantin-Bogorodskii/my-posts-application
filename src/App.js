import React, { useState, useMemo } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';

import PostList from './components/PostList';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ффф', body: '1213213123JavaScript - язык программирования' },
    { id: 2, title: 'gggg', body: 'aaaaJavaScript - язык программирования' },
    { id: 3, title: 'ббб', body: 'JavaScript -  программирования' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedPosts = useMemo(() => {
    console.log('вызвано');

    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    } else {
      return posts;
    }
  }, [posts, filter.sort]);

  const soretedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPosts]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function deletePost(post) {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm createPost={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList posts={soretedAndSearchedPosts} title="Посты про JS" deletePost={deletePost} />
    </div>
  );
}

export default App;
