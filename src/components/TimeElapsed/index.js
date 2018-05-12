import { connect } from 'react-redux'

import TimeElapsed from './component'

import { syncTimeElapsed } from '../../lib/calcTime'

const mapStateToProps = state =>
  syncTimeElapsed(state.currentTime, state.start)

export default connect(mapStateToProps)(TimeElapsed)
