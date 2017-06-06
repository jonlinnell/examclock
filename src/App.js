import React, { Component } from 'react';
import logo from './logo.svg';
import Clock, { Themes } from 'react-analog-clock';
import DigitalClock from './DigitalClock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock className="clock" theme={Themes.light} />
        <DigitalClock />
      </div>
    );
  }
}

export default App;
