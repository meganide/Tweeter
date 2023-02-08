import { ReactElement, createContext } from 'react';

import { useToggle } from '../hooks/useToggle';

interface IProps {
  children: ReactElement;
}

export interface IThemeContext {
  darkToggle: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export function ThemeContextProvider({ children }: IProps): ReactElement {
  const { toggle: darkToggle, toggleShow: toggleTheme } = useToggle(true); //TO DO:  check local storage if dark mode is already set.

  const value = {
    darkToggle,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
