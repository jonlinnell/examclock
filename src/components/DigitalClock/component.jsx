import React, { Component } from 'react'

import './styles.scss'

export default class DigitalClock extends Component {
  render() {
    return (
      <ul>
        <li className={`hours ${this.props.size}`}>{Number.isNaN(Number(this.props.hours)) ? '00' : this.props.hours}</li>
        <li className={`minutes ${this.props.size}`}>{Number.isNaN(Number(this.props.minutes)) || (this.props.minutes === 60) ? '00' : this.props.minutes}</li>
        <li className={`seconds ${this.props.size}`}>{Number.isNaN(Number(this.props.seconds)) || (this.props.seconds === 60) ? '00' : this.props.seconds}</li>
      </ul>
    )
  }
}
