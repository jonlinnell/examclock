import { connect } from 'react-redux'
import TimeRemaining from '../ui/TimeRemaining'
import { syncTimeRemaining } from '../../lib/calcTime'

const mapStateToProps = state =>
  syncTimeRemaining(state.currentTime, state.deadline)

export default connect(mapStateToProps)(TimeRemaining)
