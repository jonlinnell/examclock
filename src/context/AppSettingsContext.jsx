import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import colours from '../style/colours.json';
import styleOptions from '../style/styleOptions.json';

const AppSettingsContext = createContext();

const AppSettingsProvider = ({ children }) => {
  const [theme, setThemeState] = useState(Object.assign({}, colours.light, styleOptions));
  const [analogueClockVisibility, setAnalogueClockVisibility] = useState(true);
  const [digitalClockVisibility, setDigitalClockVisibility] = useState(true);

  const setTheme = themeName => setThemeState(Object.assign({}, colours[themeName], styleOptions));

  return (
    <AppSettingsContext.Provider
      value={{
        theme,
        setTheme,
        setAnalogueClockVisibility,
        setDigitalClockVisibility,
        analogueClockVisibility,
        digitalClockVisibility,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppSettingsContext.Provider>
  );
};

export { AppSettingsProvider };
export default AppSettingsContext;
