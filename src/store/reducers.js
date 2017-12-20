import C from '../constants'
import { combineReducers } from 'redux'

export const currentTime = (state=Date.now(), action) =>
  (action.type === C.UPDATE_CURRENT_TIME) ?
    action.payload :
    state

export const deadline = (state=null, action) => {
  switch (action.type) {

    case C.SET_DEADLINE :
      return action.payload

    case C.CLEAR_DEADLINE :
      return null

    default:
      return state
  }
}

export const start = (state=null, action) => {
  switch (action.type) {

    case C.SET_START :
      return action.payload

    case C.CLEAR_START :
      return null

    default:
      return state
  }
}

export default combineReducers({
  currentTime,
  deadline,
  start
})