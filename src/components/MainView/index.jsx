import React, { PureComponent } from 'react'

import 'antd/dist/antd.css'

import AnalogueClock from '../AnalogueClock'
import DigitalClock from '../DigitalClock'
import TimeRemaining from '../TimeRemaining'
import Settings from '../Settings'

import { rationaliseTime } from '../../lib/calcTime'

import './styles.scss'

class MainView extends PureComponent {
  constructor() {
    super()

    this.state = {
      displayTimers: true,
      currentTime: new Date(Date.now())
    }

    this.setEndTime = this.setEndTime.bind(this)
    this.setStartTime = this.setStartTime.bind(this)
    this.toggleTimers = this.toggleTimers.bind(this)
    this.toggleSettings = this.toggleSettings.bind(this)
  }

  componentDidMount() {
    setInterval(() => this.setState({ currentTime: new Date(Date.now()) }), 1000)
  }

  setEndTime = endTime => this.setState({ endTime: rationaliseTime(endTime) })
  setStartTime = startTime => this.setState({ startTime: rationaliseTime(startTime) })
  toggleTimers = () => this.setState({ displayTimers: !this.state.displayTimers })
  toggleSettings = () => this.setState({ displaySettings: !this.state.displaySettings })

  render() {
    const {
      currentTime,
      displayTimers,
      displaySettings,
      endTime,
      startTime
    } = this.state

    return (
      <div className="App">
        <div className="container">
        <div className="row">
          <div className="col-lg-12 clock-center">
            <AnalogueClock time={currentTime} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 clock-center">
            <DigitalClock
              hours={currentTime.getHours()}
              minutes={currentTime.getMinutes()}
              seconds={currentTime.getSeconds()}
              size='lg'
            />
          </div>
        </div>
        {
          displayTimers
          ? <div className="row">
              <div className="col-md-3 offset-md-3 col-sm-12">
                <h5>Time Elapsed</h5>
                {
                  startTime
                  ? (
                    <DigitalClock
                      hours={currentTime.getHours() - startTime.getHours()}
                      minutes={currentTime.getMinutes() - startTime.getMinutes()}
                      seconds={currentTime.getSeconds() - startTime.getSeconds()}
                      size='sm'
                    />)
                  : <DigitalClock size='sm' />
                }
              </div>
              <div className="col-md-3 col-xs-6">
              <h5>Time Remaining</h5>
              {
                endTime
                ? (
                  <TimeRemaining
                    currentTime={currentTime}
                    endTime={endTime}
                    size='sm'
                  />
                )
                : <DigitalClock size='sm' />
              }
              </div>
            </div>
          : null
        }
        <Settings
          displaySettings={displaySettings}
          displayTimers={displayTimers}
          onSetEndTime={this.setEndTime}
          onSetStartTime={this.setStartTime}
          onToggleTimers={this.toggleTimers}
          onToggleSettings={this.toggleSettings}
        />
        </div>
      </div>
    )
  }
}

export default MainView
