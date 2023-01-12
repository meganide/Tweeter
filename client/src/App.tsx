import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import './app.css';
import Navbar from './components/Navbar';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  function Layout() {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
      errorElement: <ErrorPage />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
