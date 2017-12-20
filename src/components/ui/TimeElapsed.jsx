import React, { Component } from 'react';
import padZero from "../../utils/padZero";
import DigitalClock from "./DigitalClock";
import "../../stylesheets/TimeElapsed.css";

export default class TimeElapsed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(props.time)
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(this.getTime(newProps.time, newProps.start))
  }

  getTime(time, start) {
    const now = new Date(time)

    const distance = now - start;

    const _second = 1000;
    const _minute = _second * 60;
    const _hour = _minute * 60;
    const _day = _hour * 24;

    if (distance < 0) {
      return null;
    }

    return ({
      hours: padZero(Math.floor((distance % _day) / _hour)),
      minutes: padZero(Math.floor((distance % _hour) / _minute)),
      seconds: padZero(Math.floor((distance % _minute) / _second))
      // replaced the above with the below to keep seconds in sync.
      // seconds: this.props.start ? padZero(this.props.time.getSeconds()) : '00'
    });
  }

  render() {
    return (
      <div>
        <h5 className="cd">TIME ELAPSED</h5>
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
