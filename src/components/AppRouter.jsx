import About from '../pages/About';
import Posts from '../pages/Posts';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/posts">
        <Posts />
      </Route>
      <Route exact path="/posts/:id">
        <PostIdPage />
      </Route>
      <Redirect to="/posts" />
    </Switch>
  );
};

export default AppRouter;
