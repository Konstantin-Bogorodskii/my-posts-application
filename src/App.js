import React, { useState } from 'react';

import PostList from './components/PostList';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript - язык программирования' },
    { id: 2, title: 'JavaScript1', body: 'JavaScript - язык программирования' },
    { id: 3, title: 'JavaScript2', body: 'JavaScript - язык программирования' },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
