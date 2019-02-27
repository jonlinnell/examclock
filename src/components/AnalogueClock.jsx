// @TODO write this
import React, { useContext } from 'react';
import moment from 'moment';

import TimeContext from '../context/TimeContext';

const AnalogueClock = () => {
  const { time } = useContext(TimeContext);

  return <p>{moment(time).format('HH mm ss')}</p>;
};

export default AnalogueClock;
