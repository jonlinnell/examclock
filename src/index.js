import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'

import MainView from './components/MainView'

import './styles/main.scss'

window.React = React

ReactDOM.render(<MainView />, document.getElementById('root'))
