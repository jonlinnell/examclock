import React, { createContext, useState, useEffect } from 'react';
import moment from 'moment';

const TimeContext = createContext();

const TimeProvider = ({ children }) => {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const timeUpdate = setInterval(() => {
      setTime(moment());
    }, 1000);

    return () => clearInterval(timeUpdate);
  }, []);

  return <TimeContext.Provider value={time}>{children}</TimeContext.Provider>;
};

export { TimeProvider };

export default TimeContext;
