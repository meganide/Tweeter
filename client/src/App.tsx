import './app.css';

import { AuthContext, IAuthContext } from './contexts/authContext';
import { IThemeContext, ThemeContext } from './contexts/themeContext';
import { QueryClient, QueryClientProvider } from 'react-query';

import Routes from './Routes';
import Spinner from './components/common/Spinner';
import { useContext } from 'react';

function App() {
  const { currentUser } = useContext(AuthContext) as IAuthContext;
  const { darkToggle } = useContext(ThemeContext) as IThemeContext;

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
