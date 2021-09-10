import Login from '../pages/Login';
import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';

export const privateRoutes = [
  { path: '/about', component: About, exact: false },
  { path: '/posts', component: Posts, exact: true },
  { path: '/posts/:id', component: PostIdPage, exact: false },
];

export const publicRoutes = [{ path: '/login', component: Login, exact: true }];
