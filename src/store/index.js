import appReducer from './reducers'
import { applyMiddleware, createStore } from 'redux'

// eslint-disable-next-line no-unused-vars
const consoleMessages = store => next => action => {
  // Include this in applyMiddleware for debugging
  let result

  console.groupCollapsed(`Dispatching action: ${action.type}`)

  result = next(action)

  console.log(`

Action:
${JSON.stringify(action, null, 2)}

State:
${JSON.stringify(store.getState(), null, 2)}

  `)

  console.groupEnd()

  return result
}

export default (initialState={}) => {
  return applyMiddleware()(createStore)(appReducer, initialState)
}
