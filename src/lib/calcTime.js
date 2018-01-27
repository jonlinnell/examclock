import padZero from './padZero'

export const syncTimeElapsed = (currentTime, start) => {
  const now = new Date(currentTime)

  const distance = now - start

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  return ({
    hours: padZero(Math.floor((distance % day) / hour)),
    minutes: padZero(Math.floor((distance % hour) / minute)),
    seconds: padZero(Math.floor((distance % minute) / second))
  })
}

export const syncTimeRemaining = (currentTime, deadline) => {
  const distance = deadline - currentTime

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  return ({
    hours: padZero(Math.floor((distance % day) / hour)),
    minutes: padZero(Math.floor((distance % hour) / minute)),
    seconds: padZero(Math.floor((distance % minute) / second))
  })
}

export const rationaliseTime = (time) => {
  const now = new Date()
  const rationalisedTime = new Date(time)

  rationalisedTime.setFullYear(now.getFullYear())
  rationalisedTime.setMonth(now.getMonth())
  rationalisedTime.setDate(now.getDate())

  return rationalisedTime
}
