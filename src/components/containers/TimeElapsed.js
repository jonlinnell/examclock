import TimeElapsed from '../ui/TimeElapsed'
import { connect } from 'react-redux'

const mapStateToProps = state =>
  ({
    start: state.start,
    time: state.currentTime
  })

export default connect(mapStateToProps)(TimeElapsed)
