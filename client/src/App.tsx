import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';

import './app.css';
import Layout from './components/Layout';
import { useToggle } from './hooks/useToggle';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

interface iChildren {
  children: JSX.Element;
}

function App() {
  const {toggle: darkToggle, toggleShow: setDarkToggle} = useToggle(true); //TO DO: add to context --> move to navbar component, also check local storage if dark mode is already set.
  
  const currentUser = true; // TODO: fetch this from backend



  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout setDarkToggle={setDarkToggle} darkToggle={darkToggle} />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
      errorElement: <ErrorPage setDarkToggle={setDarkToggle} darkToggle={darkToggle} />,
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
    <div className={`${darkToggle && 'dark'}`}>
      <div className="min-h-screen bg-main-default dark:bg-main-dark">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
