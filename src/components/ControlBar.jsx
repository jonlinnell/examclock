import React, { useContext } from 'react';
import { Radio } from 'antd';

import AppSettingsContext from '../context/AppSettingsContext';

const ControlBar = () => {
  const { setTheme } = useContext(AppSettingsContext);

  return (
    <div>
      <Radio.Group
        size="small"
        defaultValue="light"
        onChange={event => setTheme(event.target.value)}
      >
        <Radio.Button value="light">Light</Radio.Button>
        <Radio.Button value="dark">Dark</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default ControlBar;
