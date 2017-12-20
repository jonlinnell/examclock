import C from './constants'

export const updateCurrentTime = time =>
  ({
    type: C.UPDATE_CURRENT_TIME,
    payload: time
  })

export const setDeadline = (deadline) => {
  let rationalisedTime = new Date(deadline)
  rationalisedTime.setSeconds(0, 0)
  rationalisedTime.setSeconds(rationalisedTime.getSeconds() + 1)

  return ({
    type: C.SET_DEADLINE,
    payload: rationalisedTime
  })
}

export const clearDeadline = () =>
  ({
    type: C.CLEAR_DEADLINE
  })

export const setStart = (start) => {
  let rationalisedTime = new Date(start)
  rationalisedTime.setSeconds(0, 0)

  return ({
    type: C.SET_START,
    payload: rationalisedTime
  })
}

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
