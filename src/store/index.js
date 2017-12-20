import appReducer from './reducers'
import { applyMiddleware, createStore } from 'redux'

// eslint-disable-next-line no-unused-vars
const consoleMessages = store => next => action => {
  // Include this in applyMiddleware for debugging
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
  return applyMiddleware()(createStore)(appReducer, initialState)
}
