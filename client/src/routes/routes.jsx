import { Login } from '../pages';
import { DashboardLayout } from '@/Layout';
import { ProtectedRoute } from '@/components';
import { Dashboard,Messages,ProductList,Settings,OrderList } from '../pages';

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
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'orders', element: <OrderList /> },
      { path: 'settings', element: <Settings /> },
      { path: 'messages', element: <Messages /> },
    ],
  },
];

export default routes;
