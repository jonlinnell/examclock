import React, { Component } from 'react';
import DigitalClock from './DigitalClock';
import padZero from "./utils/padZero";
import './TimeDigital.css';

export default class TimeDigital extends Component {
  constructor(props) {
    super(props);
    this.state = this.getTime();

    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  getTime() {
    return ({
      hours: padZero(this.props.time.getHours()),
      minutes: padZero(this.props.time.getMinutes()),
      seconds: padZero(this.props.time.getSeconds())
    });
  }

  updateTime() {
    this.setState(this.getTime());
  }

  componentWillMount() {
    this.updateTime();
  }

  render() {
    return(
      <DigitalClock
        hours={this.state.hours}
        minutes={this.state.minutes}
        seconds={this.state.seconds}
        size='lg'
      />
    )
  }
}
