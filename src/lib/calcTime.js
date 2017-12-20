import padZero from './padZero'

export const syncTimeElapsed = (currentTime, start) => {
  const now = new Date(currentTime)

  const distance = now - start;

  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;

  if (distance < 0) {
    return null;
  }

  return ({
    hours: padZero(Math.floor((distance % _day) / _hour)),
    minutes: padZero(Math.floor((distance % _hour) / _minute)),
    seconds: padZero(Math.floor((distance % _minute) / _second))
    // replaced the above with the below to keep seconds in sync.
    // seconds: this.props.start ? padZero(this.props.time.getSeconds()) : '00'
  });
}

export const syncTimeRemaining = (currentTime, deadline) => {

}
