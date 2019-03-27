import React from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import { Router } from '@reach/router';

import 'antd/dist/antd.css';

import GlobalStyles from './style/GlobalStyle';
import { TimeProvider } from './context/TimeContext';
import { AppSettingsProvider } from './context/AppSettingsContext';

import ExamClock from './pages/ExamClock';
import ControlBar from './components/ControlBar';

const ViewMain = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const App = () => (
  <AppSettingsProvider>
    <TimeProvider>
      <GlobalStyles />
      <ViewMain>
        <Router>
          <ExamClock path="/" />
        </Router>
        <ControlBar />
      </ViewMain>
    </TimeProvider>
  </AppSettingsProvider>
);

render(<App />, document.getElementById('root'));
