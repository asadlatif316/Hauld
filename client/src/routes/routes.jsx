import { Login } from '../pages';

const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <p>dashboard</p>
      </ProtectedRoute>
    ),
  },
];

export default routes;
