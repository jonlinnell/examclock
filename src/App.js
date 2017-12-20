import React, { Component } from 'react';
import AnalogueClock from './components/containers/AnalogueClock';
import TimeDigital from './components/containers/TimeDigital';
import TimeRemaining from './components/containers/TimeRemaining';
import Config from './components/containers/Config';
import TimeElapsed from './components/containers/TimeElapsed';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheets/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 clock-center">
              <AnalogueClock />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 clock-center">
              <TimeDigital />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-md-offset-3 col-xs-6">
              <TimeElapsed />
            </div>
            <div className="col-md-3 col-xs-6">
              <TimeRemaining />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <Config />
              <img className='pull-left' src={logo} alt='logo' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
