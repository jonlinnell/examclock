import React, { Component } from 'react'
import padZero from './lib/padZero'
import DigitalClock from './DigitalClock'
import './Countdown.css'

export default class Countdown extends Component {
  constructor(props) {
    super(props)
    this.state = this.getTime()

    setInterval(() => {
      this.updateTime()
    }, 1000)
  }

  getTime() {
    const now = new Date()

    const distance = this.props.deadline - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    if (distance < 0) {
      return null
    }

    return ({
      hours: padZero(Math.floor((distance % day) / hour)),
      minutes: padZero(Math.floor((distance % hour) / minute)),
      seconds: padZero(Math.floor((distance % minute) / second))
    })
  }

  updateTime() {
    this.setState(this.getTime())
  }

  render() {
    return (
      <div>
        <h5 className='cd'>TIME REMAINING</h5>
        <DigitalClock
          hours={this.state.hours}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          size='sm'
        />
      </div>
    )
  }
}
