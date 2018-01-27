import React, { Component } from 'react'
import AnalogueClock from '../containers/AnalogueClock'
import TimeDigital from '../containers/TimeDigital'
import TimeRemaining from '../containers/TimeRemaining'
import Config from '../containers/Config'
import TimeElapsed from '../containers/TimeElapsed'
import logo from '../../logo.png'

import '../../stylesheets/App.css'

export default class App extends Component {
  render() {
    const timers = this.props.timers
      ? <div className="row">
          <div className="col-md-3 offset-md-3 col-sm-12">
            <TimeElapsed />
          </div>
          <div className="col-md-3 col-xs-6">
            <TimeRemaining />
          </div>
        </div>
      : null

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
          { timers }
          <nav className="navbar fixed-bottom">
            <img src={logo} alt='logo' />
            <Config />
          </nav>
        </div>
      </div>
    )
  }
}
