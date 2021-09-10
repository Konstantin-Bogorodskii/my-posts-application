import About from '../pages/About';
import Posts from '../pages/Posts';
import Login from '../pages/Login';
import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import PostIdPage from '../pages/PostIdPage';
import { privateRoutes, publicRoutes } from '../router/router';
import { AuthContext } from '../context/AuthContext';

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <Switch>
      {privateRoutes.map(route => {
        return (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        );
      })}

      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(route => {
        return (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        );
      })}

      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
