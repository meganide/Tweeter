import axios from 'axios';
import { useContext, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Navigate, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './app.css';
import Layout from './components/layout/Layout';
import Profile from './pages/Profile';
import { useToggle } from './hooks/useToggle';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthContext, IAuthContext } from './contexts/authContext';
import Spinner from './components/common/Spinner';
import { BASE_URL } from './utils/baseUrl';

interface IChildren {
  children: JSX.Element;
}

function App() {
  const { currentUser, setCurrentUser } = useContext(AuthContext) as IAuthContext;
  const { toggle: darkToggle, toggleShow: setDarkToggle } = useToggle(true); //TO DO: add to context --> move to navbar component, also check local storage if dark mode is already set.


  useEffect(() => {
    async function getUser() {
      try {
        const user = await axios.get(BASE_URL + '/api/users/find');
        setCurrentUser(user.data);
      } catch (error) {
        console.log('error', error);
      }
    }

    if (!currentUser) {
      getUser();
    }
  }, [currentUser]);

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
    {
      path: '/profile',
      element: (
        <ProtectedRoute>
          <Layout setDarkToggle={setDarkToggle} darkToggle={darkToggle} />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/profile/',
          element: <Profile />,
        },
      ],
    },
  ]);

  function ProtectedRoute({ children }: IChildren) {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  }

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${darkToggle && 'dark'}`}>
        <div className="min-h-screen bg-main-default dark:bg-main-dark">
          {currentUser ? <RouterProvider router={router} /> : <Spinner />}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
