import Config from '../ui/Config'
import {
  setDeadline,
  clearDeadline,
  setStart,
  toggleTimers,
  clearStart
} from '../../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    deadline: state.deadline,
    start: state.start,
    timers: state.timers
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    onSetDeadline(event, deadline) {
      dispatch(
        setDeadline(deadline)
      )
    },
    onClearDeadline() {
      dispatch(
        clearDeadline()
      )
    },
    onSetStart(event, start) {
      dispatch(
        setStart(start)
      )
    },
    onClearStart() {
      dispatch(
        clearStart()
      )
    },
    onToggleTimers(event, toggled) {
      dispatch(
        toggleTimers(toggled)
      )
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Config)
