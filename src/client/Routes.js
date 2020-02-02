import App from './App';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UsersListPage';

export default [
  {
    ...App,
    routes: [
      {
        path: '/',
        ...HomePage,
        exact: true,
      },
      {
        path: '/users',
        ...UserListPage,
      },
    ],
  },
];
