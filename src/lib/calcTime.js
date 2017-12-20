import padZero from './padZero'

export const syncTimeElapsed = (currentTime, start) => {
  const now = new Date(currentTime)

  const distance = now - start

  const _second = 1000
  const _minute = _second * 60
  const _hour = _minute * 60
  const _day = _hour * 24

  return ({
    hours: padZero(Math.floor((distance % _day) / _hour)),
    minutes: padZero(Math.floor((distance % _hour) / _minute)),
    seconds: padZero(Math.floor((distance % _minute) / _second))
  })
}

export const syncTimeRemaining = (currentTime, deadline) => {
  const distance = deadline - currentTime

  const _second = 1000
  const _minute = _second * 60
  const _hour = _minute * 60
  const _day = _hour * 24

  return ({
    hours: padZero(Math.floor((distance % _day) / _hour)),
    minutes: padZero(Math.floor((distance % _hour) / _minute)),
    seconds: padZero(Math.floor((distance % _minute) / _second))
  })
}

export const rationaliseTime = (time) => {
  let now = new Date()
  let rationalisedTime = new Date(time)

  rationalisedTime.setFullYear(now.getFullYear())
  rationalisedTime.setMonth(now.getMonth())
  rationalisedTime.setDate(now.getDate())

  return rationalisedTime
}
