import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';

import GlobalStyles from './style/GlobalStyles';
import { TimeProvider } from './context/TimeContext';
import { AppSettingsProvider } from './context/AppSettingsContext';

import ExamClock from './pages/ExamClock';

const App = () => (
  <AppSettingsProvider>
    <TimeProvider>
      <main>
        <GlobalStyles />
        <Router>
          <ExamClock path="/" />
        </Router>
      </main>
    </TimeProvider>
  </AppSettingsProvider>
);

render(<App />, document.getElementById('root'));
