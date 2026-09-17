import { Login } from '../pages';
import { DashboardLayout } from '@/Layout';

const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
  },
];

export default routes;
