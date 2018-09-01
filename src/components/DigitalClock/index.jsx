import React from 'react'

import './styles.scss'

const padStart = number => (String(number).length === 1 ? `0${number}` : number)

const DigitalClock = ({
  hours,
  minutes,
  seconds,
  size
}) => (
  <ul className='digital-clock'>
    <li className={`hours ${size}`}>
      { padStart(hours) || '00' }
    </li>

    <li className={`minutes ${size}`}>
      { Number.isNaN(Number(minutes)) || (minutes === 60) ? '00' : padStart(minutes) }
    </li>

    <li className={`seconds ${size}`}>
      { Number.isNaN(Number(seconds)) || (seconds === 60) ? '00' : padStart(seconds) }
    </li>
  </ul>
)

export default DigitalClock
