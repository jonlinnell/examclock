import C from '../constants'
import appReducer from './reducers'
import { applyMiddleware, createStore } from 'redux'

const consoleMessages = store => next => action => {
  let result

  console.groupCollapsed(`Dispatching action: ${action.type}`)

  result = next(action)

  console.log(`

    State:
    ${JSON.stringify(store.getState())}

  `)

  console.groupEnd()

  return result
}

export default (initialState={}) => {
  return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState)
}
