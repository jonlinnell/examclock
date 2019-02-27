import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '../style/theme.json';

const AppSettingsContext = createContext();

const AppSettingsProvider = ({ children }) => {
  const [theme, setThemeState] = useState(themes.light);

  const setTheme = themeName => setThemeState(themes[themeName]);

  return (
    <AppSettingsContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppSettingsContext.Provider>
  );
};

export { AppSettingsProvider };
export default AppSettingsContext;
