import React, { Component } from 'react';
import './DigitalClock.css';

class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 'Loading...'
    };

    setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }
  getDateString() {
    const date = new Date;
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
  render() {
    return(
      <h1>{this.getDateString()}</h1>
    )
  }
}

export default DigitalClock;
