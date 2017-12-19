import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import IconSettings from 'material-ui/svg-icons/action/settings';
import TimePicker from 'material-ui/TimePicker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './Config.css';

injectTapEventPlugin();

const customContentStyle = {
  width: '75%',
  maxWidth: '400px'
};

export default class DialogExampleSimple extends React.Component {
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
            hintText='Exam Starts...'
            pedantic={true}
            autoOk={true}
            value={this.props.start}
            onChange={this.props.startHandler}
          />
          <TimePicker
            hintText='Exam Ends...'
            pedantic={true}
            autoOk={true}
            value={this.props.deadline}
            onChange={this.props.deadlineHandler}
          />
        </Dialog>
      </div>
    );
  }
}