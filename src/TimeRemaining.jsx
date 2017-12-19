import React, { Component } from 'react';
import padZero from "./utils/padZero";
import DigitalClock from "./DigitalClock";
import "./TimeRemaining.css";

export default class TimeRemaining extends Component {
  constructor(props) {
    super(props);
    this.state = this.getTime();

    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  getTime() {
    var distance = this.props.deadline - this.props.time;

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

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