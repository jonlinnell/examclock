import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import 'bootstrap/dist/css/bootstrap.css'

import MainView from './components/MainView'

import storeFactory from './store'
import { addError, updateCurrentTime } from './actions'

import './styles/main.scss'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#B70062',
    primary2Color: '#ED2482',
    pickerHeaderColor: '#B70062',
    textColor: '#525E66'
  }
})

const fakeNow = new Date(Date.now())
fakeNow.setFullYear(fakeNow.getFullYear() + 1)
fakeNow.setHours(0, 0, 0, 0)

const initialState = {
  currentTime: Date.now(),
  start: fakeNow,
  deadline: null,
  errors: []
}

const store = storeFactory(initialState)

window.React = React

window.addEventListener('error', (message) => {
  store.dispatch(addError(message))
})

setInterval(() => {
  store.dispatch(updateCurrentTime(Date.now()))
}, 1000)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <MainView />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
