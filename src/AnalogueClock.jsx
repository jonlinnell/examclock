import React, { Component } from 'react';
import padZero from "./utils/padZero";
import './AnalogueClock.css';

export default class AnalogueClock extends Component {
  constructor(props) {
    super(props);
    this.state = this.getTime();

    setInterval(() => {
      this.updateTime();
      this.updateClock();
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
  
  updateClock() {
    let angleSeconds = (this.state.seconds * 60) / 10;    
    let angleMinutes = this.state.minutes * 6;
    let angleHours =  (this.state.hours  / 12) * 360;
    document.getElementById('js-seconds').style.transform = `translate(-50%, -100%) rotate(${angleSeconds}deg)`;
    document.getElementById('js-minutes').style.transform = `translate(-50%, -100%) rotate(${angleMinutes}deg)`;
    document.getElementById('js-hours').style.transform = `translate(-50%, -100%) rotate(${angleHours}deg)`;
  }

  componentDidMount() {
    this.updateClock();
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
