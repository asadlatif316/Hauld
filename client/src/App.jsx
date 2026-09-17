import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { ToastWrapper } from './components';
import { useAuthStore } from './store';
import { useEffect } from 'react';
const router = createBrowserRouter([...routes]);

function App() {
  const { checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastWrapper />
    </>
  );
}

export default App;
