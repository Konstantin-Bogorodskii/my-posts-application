import React from 'react';
import { useParams } from 'react-router';
// import { PostService } from '../API/PostServise';

const PostIdPage = () => {
  const params = useParams();

  return <div>Вы открыли страницу поста № {params}</div>;
};

export default PostIdPage;
