import PostService from '../API/PostServise';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { usePosts } from '../hooks/usePosts';
import React, { useState, useEffect } from 'react';
import MyButton from '../UI/button/MyButton';
import { Loader } from '../UI/Loader/Loader';
import MyModal from '../UI/MyModal/MyModal';
import Pagination from '../UI/pagination/Pagination';
import { getPagesCount } from '../utils/getPagesCount';
import '../styles/App.css';

function Posts() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [visible, setVisible] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setVisible(false);
  }

  function deletePost(post) {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  useEffect(() => {
    fetchPosts();
  }, [page]);

  async function fetchPosts() {
    console.log('rend');
    setIsPostsLoading(true);
    setTimeout(async () => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);

      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPagesCount(totalCount, limit));

      setIsPostsLoading(false);
    }, 1000);
  }

  const changePage = page => {
    setPage(page);
  };

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
      {isPostsLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      ) : (
        <PostList posts={sortedAndSearchedPosts} title="Посты про JS" deletePost={deletePost} />
      )}

      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
}

export default Posts;
