// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PostService from '../API/PostServise';
import { Loader } from '../UI/Loader/Loader';
import classes from './PostIdPage.module.css';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const fetchPost = async id => {
    const response = await PostService.getById(id);
    setPost(response.data);
  };

  const fetchComments = async id => {
    const response = await PostService.getComments(id);
    setComments(response.data);
  };

  useEffect(() => {
    fetchPost(params.id);
    fetchComments(params.id);
  }, [params.id]);

  return (
    <div className={classes.wrap}>
      <h1 className={classes.title}>Вы открыли страницу поста №{params.id}</h1>
      <div>
        {Object.keys(post).length > 0 ? (
          <div className={classes.post}>
            {post.id}. {post.title}
          </div>
        ) : (
          <Loader />
        )}

        <h2 className={classes.comms}>Коментарии:</h2>
        <div>
          {comments.length > 0 ? (
            <ul style={{ marginLeft: '20px' }}>
              {comments.map(comment => {
                return (
                  <li key={comment.id} style={{ marginTop: '15px' }}>
                    <h5>{comment.email}</h5>
                    <div>{comment.body}</div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default PostIdPage;
