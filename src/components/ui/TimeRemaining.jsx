import React, { Component } from 'react'
import DigitalClock from './DigitalClock'
import '../../stylesheets/TimeRemaining.css'

export default class TimeRemaining extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hours: props.hours,
      minutes: props.minutes,
      seconds: props.seconds
    }
  }

  syncTime = (time) => {
    this.setState({
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds
    })
  }

  componentWillReceiveProps(newProps) {
    this.syncTime(newProps)
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
