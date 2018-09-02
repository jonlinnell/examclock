import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Form,
  Modal,
  Button,
  Icon,
  TimePicker,
  Switch
} from 'antd'

const SettingsButton = styled(Button)`
  position: absolute;
  bottom: 12px;
  right: 12px;
`

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
        <SettingsButton
          onClick={onToggleSettings}
        >
          <Icon type="setting" />
        </SettingsButton>
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
