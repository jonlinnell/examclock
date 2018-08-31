import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import IconSettings from 'material-ui/svg-icons/action/settings'
import TimePicker from 'material-ui/TimePicker'
import Toggle from 'material-ui/Toggle'
import injectTapEventPlugin from 'react-tap-event-plugin'

import './styles.scss'

injectTapEventPlugin()

const customContentStyle = {
  width: '75%',
  maxWidth: '400px'
}

export default class Config extends Component {
  state = { open: false }

  handleOpen = () => this.setState({ open: true })

  handleClose = () => this.setState({ open: false })

  render() {
    const {
      startTime,
      endTime,
      onSetStartTime,
      onSetEndTime,
      displayTimers,
      onToggleTimers
    } = this.props

    return (
      <div className='button-config'>
        <IconButton
          onClick={this.handleOpen}>
          <IconSettings />
        </IconButton>
        <Dialog
          title='Settings'
          actions={
            <FlatButton
              label='Close'
              primary={true}
              onClick={this.handleClose}
            />
          }
          modal={false}
          open={this.state.open}
          contentStyle={customContentStyle}
          onRequestClose={this.handleClose}
        >
          <TimePicker
            hintText='Exam start time'
            pedantic={true}
            autoOk={true}
            value={startTime}
            onChange={onSetStartTime}
            className='my-2'
          />
          <TimePicker
            hintText='Exam end time'
            pedantic={true}
            autoOk={true}
            value={endTime}
            onChange={onSetEndTime}
            className='my-2'
          />
          <Toggle
            label='Show Timers'
            defaultToggled={displayTimers}
            onToggle={onToggleTimers}
            className='my-2'
          />
        </Dialog>
      </div>
    )
  }
}
