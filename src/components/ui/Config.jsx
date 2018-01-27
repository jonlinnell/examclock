import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconSettings from 'material-ui/svg-icons/action/settings';
import TimePicker from 'material-ui/TimePicker';
import Toggle from 'material-ui/Toggle'
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../../stylesheets/Config.css';

injectTapEventPlugin();

const customContentStyle = {
  width: '75%',
  maxWidth: '400px'
};

export default class Config extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render = () => {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <IconButton
          className="pull-right"
          onTouchTap={this.handleOpen}>
          <IconSettings />
        </IconButton>
        <Dialog
          title="Settings"
          actions={actions}
          modal={false}
          open={this.state.open}
          contentStyle={customContentStyle}
          onRequestClose={this.handleClose}
        >
          <TimePicker
            hintText='Exam start time'
            pedantic={true}
            autoOk={true}
            value={new Date(this.props.start)}
            onChange={this.props.onSetStart}
          />
          <TimePicker
            hintText='Exam end time'
            pedantic={true}
            autoOk={true}
            value={new Date(this.props.deadline)}
            onChange={this.props.onSetDeadline}
          />
          <Toggle
            label='Show Timers'
            defaultToggled={this.props.timers}
            onToggle={this.props.onToggleTimers}
          />
        </Dialog>
      </div>
    );
  }
}
