import { applyMiddleware, createStore } from 'redux'
import appReducer from './reducers'

import defaultInitialState from '../initialState'

export default (initialState = defaultInitialState) =>
  applyMiddleware()(createStore)(appReducer, initialState)
