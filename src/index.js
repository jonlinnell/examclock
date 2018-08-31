import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import 'bootstrap/dist/css/bootstrap.css'

import MainView from './components/MainView'

import './styles/main.scss'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#B70062',
    primary2Color: '#ED2482',
    pickerHeaderColor: '#B70062',
    textColor: '#525E66'
  }
})

window.React = React

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <MainView />
  </MuiThemeProvider>,
  document.getElementById('root')
)
