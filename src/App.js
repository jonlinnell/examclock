import React, { Component } from 'react';
import AnalogueClock from './AnalogueClock';
import TimeDigital from './TimeDigital';
import TimeRemaining from './TimeRemaining';
import Config from './Config';
import TimeElapsed from './TimeElapsed';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {time: new Date()};

    this.updateStart = this.updateStart.bind(this);
    this.updateDeadline = this.updateDeadline.bind(this);

    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    this.setState({time: new Date()});
  }

  updateDeadline(event, time) {
    time.setSeconds(0);
    this.setState({deadline: time});
  }

  updateStart(event, time) {
    time.setSeconds(0);
    this.setState({start: time});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 clock-center">
              <AnalogueClock time={this.state.time} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 clock-center">
              <TimeDigital time={this.state.time} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-md-offset-3 col-xs-6">
              <TimeElapsed start={this.state.start} time={this.state.time} />
            </div>
            <div className="col-md-3 col-xs-6">
              <TimeRemaining deadline={this.state.deadline} time={this.state.time} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <Config
                startHandler={this.updateStart}
                deadlineHandler={this.updateDeadline}
                deadline={this.state.deadline}
                start={this.state.start}
              />
              <img className='pull-left' src={logo} alt='logo' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
