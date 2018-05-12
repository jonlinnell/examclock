import React, { Component } from 'react'

import AnalogueClock from '../AnalogueClock'
import TimeDigital from '../TimeDigital'
import TimeRemaining from '../TimeRemaining'
import Config from '../Config'
import TimeElapsed from '../TimeElapsed'

import './styles.scss'

export default class MainView extends Component {
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
          <nav className="navbar w-100 fixed-bottom">
            <Config />
          </nav>
        </div>
      </div>
    )
  }
}
