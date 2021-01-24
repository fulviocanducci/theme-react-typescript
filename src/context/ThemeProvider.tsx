import React, { createContext, useState, useContext } from 'react';

import { IChildren, ITheme, IThemeContext, IThemeItem } from './../interfaces';

export const ThemeContext = createContext<Partial<IThemeContext>>({});

function ThemeProvider({ children }: IChildren) {
  const [themes, setThemes] = useState<ITheme | null>({
    black: {
      background: '#000000',
      color: '#FFFFFF',
    },
    white: {
      background: '#FFFFFF',
      color: '#000000',
    },
  });
  return (
    <ThemeContext.Provider value={{ themes, setThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext(): [
  IThemeItem | undefined,
  (event: React.MouseEvent<HTMLButtonElement>) => void,
  string
] {
  const context = useContext(ThemeContext);
  const [themeDefault, setThemeDefault] = useState('black');

  function toogleTheme(e: React.MouseEvent): void {
    setThemeDefault((state) => (themeDefault === 'white' ? 'black' : 'white'));
  }

  const theme: IThemeItem | undefined =
    themeDefault === 'white' ? context.themes?.white : context.themes?.black;

  return [theme, toogleTheme, themeDefault];
}

export default ThemeProvider;
