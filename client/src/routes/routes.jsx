import { DashboardLayout } from '@/Layout';
import { ProtectedRoute } from '@/components';
import {
  Dashboard,
  Messages,
  ProductList,
  Settings,
  OrderList,
  OrderDetailsPage,
  EditProductPage,
  Login,
  ProductCreatePage,
  NewOrderPage,
} from '../pages';

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
      { path: 'products/new', element: <ProductCreatePage /> },
      { path: 'products/:id/edit', element: <EditProductPage /> },
      { path: 'orders', element: <OrderList /> },
      { path: 'orders/:id', element: <OrderDetailsPage /> },
      { path: 'orders/new', element: <NewOrderPage /> },
      { path: 'settings', element: <Settings /> },
      { path: 'messages', element: <Messages /> },
    ],
  },
];

export default routes;
