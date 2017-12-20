import C from './constants'

export const updateCurrentTime = time =>
  ({
    type: C.UPDATE_CURRENT_TIME,
    payload: time
  })

export const setDeadline = deadline =>
  ({
    type: C.SET_DEADLINE,
    payload: deadline
  })

export const clearDeadline = () =>
  ({
    type: C.CLEAR_DEADLINE
  })

export const setStart = start =>
  ({
    type: C.SET_START,
    payload: start
  })

export const clearStart = () =>
  ({
    type: C.CLEAR_START
  })

export const addError = message =>
 ({
   type: C.ADD_ERROR,
   payload: message
 })

export const clearError = index =>
  ({
    type: C.CLEAR_ERROR,
    payload: index
  })
