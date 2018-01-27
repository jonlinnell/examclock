import React, { Component } from 'react'
import DigitalClock from './DigitalClock'
import '../../stylesheets/TimeElapsed.css'

export default class TimeElapsed extends Component {
  constructor(props) {
    super()
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
        <h5 className='cd'>TIME ELAPSED</h5>
        <DigitalClock
          hours={this.props.hours}
          minutes={this.props.minutes}
          seconds={this.props.seconds}
          size='sm'
        />
      </div>
    )
  }
}
