import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './App';

import storeFactory from './store'
import { addError, updateCurrentTime } from './actions'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import registerServiceWorker from './registerServiceWorker';

import './stylesheets/index.css';

const defaultStateData = {
  currentTime: Date.now(),
  startTime: null,
  endTime: null,
  errors: []
}

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#B70062',
    primary2Color: '#ED2482',
    pickerHeaderColor: '#B70062',
    textColor: '#525E66'
  }
});

const initialState = (localStorage["redux-store"]) ?
  JSON.parse(localStorage["redux-store"]) :
  defaultStateData

const saveState = () =>
  localStorage["redux-store"] = JSON.stringify(store.getState())

const handleError = error => {
  store.dispatch(
    addError(error.message)
  )
}

const store = storeFactory(initialState)
store.subscribe(saveState)

window.React = React
window.store = store //debug

window.addEventListener("error", handleError)

setInterval(() => {
  store.dispatch(
    updateCurrentTime(Date.now())
  )
}, 1000)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
