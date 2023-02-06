import { useContext } from 'react';
import { createBrowserRouter, Navigate, RouterProvider, ScrollRestoration } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthContext, IAuthContext } from './contexts/authContext';
import Bookmarks from './pages/Bookmarks';
import Explore from './pages/Explore';

interface IChildren {
  children: any;
}

function Routes() {
  const { currentUser } = useContext(AuthContext) as IAuthContext;

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <ScrollRestoration />
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'profile',
          element: <Profile />,
          children: [
            {
              path: ':name',
              element: <Profile />,
            },
          ],
        },
        {
          path: 'bookmarks',
          element: <Bookmarks />,
        },
        {
          path: 'explore',
          element: <Explore />,
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

  function ProtectedRoute({ children }: IChildren) {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  }

  return <RouterProvider router={router} />;
}

export default Routes;
