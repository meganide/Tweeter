import React, { ReactElement, ReactNode } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';

import './app.css';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

interface iChildren {
  children: JSX.Element;
}

function App() {
  const currentUser = true; // TODO: fetch this from backend

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
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

  function ProtectedRoute({ children }: iChildren) {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  }

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
