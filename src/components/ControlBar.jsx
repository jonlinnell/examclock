import React, { useContext } from 'react';
import styled from 'styled-components';
import { Radio, Switch } from 'antd';

import AppSettingsContext from '../context/AppSettingsContext';

import InputGroup from './InputGroup';

const StyledControlBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ControlBar = () => {
  const {
    setTheme,
    setAnalogueClockVisibility,
    setDigitalClockVisibility,
    analogueClockVisibility,
    digitalClockVisibility,
  } = useContext(AppSettingsContext);

  return (
    <StyledControlBar>
      <Radio.Group defaultValue="light" onChange={event => setTheme(event.target.value)}>
        <Radio.Button value="light">Light</Radio.Button>
        <Radio.Button value="dark">Dark</Radio.Button>
      </Radio.Group>
      <InputGroup label="Analogue Clock">
        <Switch
          checked={analogueClockVisibility}
          onChange={() => setAnalogueClockVisibility(!analogueClockVisibility)}
          size="small"
        />
      </InputGroup>
      <InputGroup label="Digital Clock">
        <Switch
          checked={digitalClockVisibility}
          onChange={() => setDigitalClockVisibility(!digitalClockVisibility)}
          size="small"
        />
      </InputGroup>
    </StyledControlBar>
  );
};

export default ControlBar;
