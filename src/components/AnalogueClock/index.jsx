import React, { Component } from 'react'

import './styles.scss'

export default class AnalogueClock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      angleSeconds: null,
      angleMinutes: null,
      angleHours: null
    }
  }

  syncTime(newTime) {
    const time = new Date(newTime)
    const angleSeconds = (time.getSeconds() * 60) / 10
    const angleMinutes = time.getMinutes() * 6
    const angleHours = (time.getHours() / 12) * 360

    this.setState({
      secondsStyleTransform: { transform: `translate(-50%, -100%) rotate(${angleSeconds}deg)` },
      minutesStyleTransform: { transform: `translate(-50%, -100%) rotate(${angleMinutes}deg)` },
      hoursStyleTransform: { transform: `translate(-50%, -100%) rotate(${angleHours}deg)` }
    })
  }

  componentDidMount() {
    this.syncTime(this.props.time)
  }

  componentWillReceiveProps(newProps) {
    this.syncTime(newProps.time)
  }

  render() {
    return (
      <div className="c-clock">
        <div id ="js-hours" className="c-clock__tick c-clock__tick--hours" style={this.state.hoursStyleTransform}></div>
        <div id ="js-minutes" className="c-clock__tick c-clock__tick--minutes" style={this.state.minutesStyleTransform}></div>
        <div id ="js-seconds" className="c-clock__tick c-clock__tick--seconds" style={this.state.secondsStyleTransform}></div>
      </div>
    )
  }
}
