import { connect } from 'react-redux'

import TimeDigital from './component'

const mapStateToProps = state =>
  ({
    time: state.currentTime
  })

export default connect(mapStateToProps)(TimeDigital)
