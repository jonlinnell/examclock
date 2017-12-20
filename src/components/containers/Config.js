import Config from '../ui/Config'
import {
  setDeadline,
  clearDeadline,
  setStart,
  clearStart
} from '../../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    deadline: state.deadline,
    start: state.start
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
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Config)
