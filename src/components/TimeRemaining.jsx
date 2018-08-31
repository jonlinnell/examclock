import React from 'react'

import DigitalClock from '../DigitalClock'

const TimeRemaining = ({ currentTime, endTime, ...rest }) => {
  const distance = endTime - currentTime

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  return (
    <DigitalClock
      hours={Math.floor((distance % day) / hour)}
      minutes={Math.floor((distance % hour) / minute)}
      seconds={Math.floor((distance % minute) / second)}
      {...rest}
    />
  )
}

export default TimeRemaining
