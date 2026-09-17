import { useAuthStore } from '@/store';
import { Navigate } from 'react-router-dom';
const ProtectRoute = () => {
  const { user, isCheckingAuth } = useAuthStore();
  if (!isCheckingAuth) <p>Loading</p>;
  if (!user) return <Navigate to='/login' replace />;
};

export default ProtectRoute;
