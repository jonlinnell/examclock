import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';

import theme from './style/theme.json';
import GlobalStyles from './style/GlobalStyles';
import { TimeProvider } from './context/TimeContext';

import ExamClock from './pages/ExamClock';

const App = () => (
  <ThemeProvider theme={theme}>
    <TimeProvider>
      <main>
        <GlobalStyles />
        <Router>
          <ExamClock path="/" />
        </Router>
      </main>
    </TimeProvider>
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
