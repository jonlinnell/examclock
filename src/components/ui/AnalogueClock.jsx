import React, { Component } from 'react';
import '../../stylesheets/AnalogueClock.css';

export default class AnalogueClock extends Component {
  constructor(props) {
    super()
    // Fix loading initial values here
  }

  syncTime = (newTime) => {
    let time = new Date(newTime)
    this.updateClock(
      time.getHours(),
      time.getMinutes(),
      time.getSeconds()
    )
  }

  componentDidMount() {
    this.syncTime(this.props.time);
  }

  componentWillReceiveProps(newProps) {
    this.syncTime(newProps.time)
  }

  updateClock(hours, minutes, seconds) {
    let angleSeconds = (seconds * 60) / 10;
    let angleMinutes = minutes * 6;
    let angleHours =  (hours  / 12) * 360;
    document.getElementById('js-seconds').style.transform = `translate(-50%, -100%) rotate(${angleSeconds}deg)`;
    document.getElementById('js-minutes').style.transform = `translate(-50%, -100%) rotate(${angleMinutes}deg)`;
    document.getElementById('js-hours').style.transform = `translate(-50%, -100%) rotate(${angleHours}deg)`;
  }

  render() {
    return (
      <div className="c-clock">
        <div id ="js-hours" className="c-clock__tick c-clock__tick--hours"></div>
        <div id ="js-minutes" className="c-clock__tick c-clock__tick--minutes"></div>
        <div id ="js-seconds" className="c-clock__tick c-clock__tick--seconds"></div>
      </div>
    )
  }
}
