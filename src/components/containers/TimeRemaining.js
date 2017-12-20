import TimeRemaining from '../ui/TimeRemaining'
import { connect } from 'react-redux'

const mapStateToProps = state =>
  ({
    deadline: state.deadline,
    time: state.currentTime
  })

export default connect(mapStateToProps)(TimeRemaining)
