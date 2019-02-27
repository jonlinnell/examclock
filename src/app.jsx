import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';

import theme from './style/theme.json';

import GlobalStyles from './style/GlobalStyles';

import Home from './pages/Home';

const App = () => (
  <ThemeProvider theme={theme}>
    <main>
      <GlobalStyles />
      <Router>
        <Home path="/" />
      </Router>
    </main>
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
