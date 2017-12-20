import React, { Component } from 'react';
import padZero from "../../lib/padZero";
import DigitalClock from "./DigitalClock";
import "../../stylesheets/TimeRemaining.css";

export default class TimeRemaining extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(props.time)
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(this.getTime(newProps.time, newProps.deadline))
  }

  getTime(time, deadline) {
    const distance = deadline - time;

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
    });
  }

  updateTime() {
    this.setState(this.getTime());
  }

  render() {
    return (
      <div>
        <h5 className="cd">TIME REMAINING</h5>
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
