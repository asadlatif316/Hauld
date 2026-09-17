import { useAuthStore } from '@/store';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({children}) => {
  const { user, isCheckingAuth } = useAuthStore();
  if (!isCheckingAuth) <p>Loading</p>;
  if (!user) return <Navigate to='/login' replace />;
  return children
};

export default ProtectedRoute;
