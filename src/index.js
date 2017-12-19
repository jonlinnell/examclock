import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#B70062',
    primary2Color: '#ED2482',
    pickerHeaderColor: '#B70062',
    textColor: '#525E66'
  }
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
