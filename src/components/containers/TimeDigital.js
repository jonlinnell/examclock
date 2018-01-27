import { connect } from 'react-redux'

import TimeDigital from '../ui/TimeDigital'

const mapStateToProps = state =>
  ({
    time: state.currentTime
  })

export default connect(mapStateToProps)(TimeDigital)
