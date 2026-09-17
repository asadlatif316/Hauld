import { Login } from '../pages';
import { DashboardLayout } from '@/Layout';
import { ProtectedRoute } from '@/components';
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
