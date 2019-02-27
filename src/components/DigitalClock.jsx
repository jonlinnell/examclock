import React, { useContext } from 'react';
import moment from 'moment';

import DigitalClockFace from './DigitalClockFace';
import DigitalClockRotor from './DigitalClockRotor';

import TimeContext from '../context/TimeContext';

const DigitalClock = () => {
  const { time } = useContext(TimeContext);

  return (
    <DigitalClockFace>
      <DigitalClockRotor>{moment(time).format('HH:mm:ss')}</DigitalClockRotor>
    </DigitalClockFace>
  );
};

export default DigitalClock;
