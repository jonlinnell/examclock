import React from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import { Router } from '@reach/router';

import GlobalStyles from './style/GlobalStyles';
import { TimeProvider } from './context/TimeContext';
import { AppSettingsProvider } from './context/AppSettingsContext';

import ExamClock from './pages/ExamClock';

const ViewMain = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;

  padding: 24px;
`;

const App = () => (
  <AppSettingsProvider>
    <TimeProvider>
      <GlobalStyles />
      <ViewMain>
        <Router>
          <ExamClock path="/" />
        </Router>
        <div>yo yoooo</div>
      </ViewMain>
    </TimeProvider>
  </AppSettingsProvider>
);

render(<App />, document.getElementById('root'));
