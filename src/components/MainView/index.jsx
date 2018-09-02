import React, { PureComponent } from 'react'
import { Layout, Row, Col } from 'antd'

import 'antd/dist/antd.css'

import AnalogueClock from '../AnalogueClock'
import DigitalClock from '../DigitalClock'
import TimeRemaining from '../TimeRemaining'
import Settings from '../Settings'

import { rationaliseTime } from '../../lib/calcTime'

const { Content, Footer } = Layout

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
      <Layout>
        <Content>
          <Row>
            <Col span={12} offset={6}>
              <AnalogueClock time={currentTime} />
            </Col>
          </Row>

          <Row>
            <Col span={12} offset={6}>
              <DigitalClock
                hours={currentTime.getHours()}
                minutes={currentTime.getMinutes()}
                seconds={currentTime.getSeconds()}
                size='lg'
              />
            </Col>
          </Row>
          {
            displayTimers
              ? <Row
                  align="middle"
                  justify="center"
                >
                  <Col span={6} offset={6}>
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
                  </Col>
                  <Col span={6}>
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
                  </Col>
                </Row>
              : null
            }
          <Footer>
            <Settings
              displaySettings={displaySettings}
              displayTimers={displayTimers}
              onSetEndTime={this.setEndTime}
              onSetStartTime={this.setStartTime}
              onToggleTimers={this.toggleTimers}
              onToggleSettings={this.toggleSettings}
            />
          </Footer>
        </Content>
      </Layout>
    )
  }
}

export default MainView
