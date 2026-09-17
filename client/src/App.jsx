import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { ToastWrapper } from './components';

const router = createBrowserRouter([...routes]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastWrapper />
    </>
  );
}

export default App;
