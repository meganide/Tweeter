import { useContext, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

import './app.css';
import { BASE_URL } from './utils/baseUrl';
import { AuthContext, IAuthContext } from './contexts/authContext';
import { IThemeContext, ThemeContext } from './contexts/themeContext';
import Spinner from './components/common/Spinner';
import Routes from './Routes';

function App() {
  const { currentUser, setCurrentUser } = useContext(AuthContext) as IAuthContext;
  const { darkToggle } = useContext(ThemeContext) as IThemeContext;

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

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${darkToggle && 'dark'}`}>
        <div className="min-h-screen bg-main-default dark:bg-main-dark">{currentUser ? <Routes /> : <Spinner />}</div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
