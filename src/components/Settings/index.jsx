import React, { Component } from 'react'
import {
  Form,
  Modal,
  Button,
  TimePicker,
  Switch
} from 'antd'

import './styles.scss'

export default class Config extends Component {
  state = { open: false }

  handleOpen = () => this.setState({ open: true })

  handleClose = () => this.setState({ open: false })

  render() {
    const {
      onSetEndTime,
      onSetStartTime,
      displayTimers,
      displaySettings,
      onToggleTimers,
      onToggleSettings
    } = this.props

    return (
      <div>
        <Button
          onClick={onToggleSettings}
        >
          Settings
        </Button>
        <Modal
          title='Settings'
          visible={displaySettings}
          onOk={onToggleSettings}
          onCancel={onToggleSettings}
        >
          <TimePicker
            placeholder='Exam start time'
            onChange={onSetStartTime}
            format="HH:mm"
          />
          <br />
          <TimePicker
            placeholder='Exam end time'
            onChange={onSetEndTime}
            format="HH:mm"
          />
          <br />
          <Form.Item>
            <label htmlFor="toggle-timers">Toggle</label>
            <Switch
              label='Show Timers'
              id="toggle-timers"
              checked={displayTimers}
              onChange={onToggleTimers}
            />
          </Form.Item>
        </Modal>
      </div>
    )
  }
}
