import App from './App';
import { AuthContextProvider } from './contexts/authContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContextProvider } from './contexts/themeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
