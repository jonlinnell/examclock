import React, { Component } from 'react'
import DigitalClock from '../DigitalClock'
import padZero from '../../lib/padZero'

import './styles.css'

export default class TimeDigital extends Component {
  constructor(props) {
    super()
    this.state = {
      time: new Date(props.time)
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      time: new Date(newProps.time)
    })
  }

  render() {
    return (
      <DigitalClock
        hours={padZero(this.state.time.getHours())}
        minutes={padZero(this.state.time.getMinutes())}
        seconds={padZero(this.state.time.getSeconds())}
        size='lg'
      />
    )
  }
}
