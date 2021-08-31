import React, { useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';

import PostList from './components/PostList';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';
import MyButton from './UI/button/MyButton';
import MyModal from './UI/MyModal/MyModal';

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [visible, setVisible] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setVisible(false);
  }

  function deletePost(post) {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: '20px' }} onClick={() => setVisible(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm createPost={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList posts={sortedAndSearchedPosts} title="Посты про JS" deletePost={deletePost} />
    </div>
  );
}

export default App;
