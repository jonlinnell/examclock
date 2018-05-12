import { connect } from 'react-redux'

import AnalogueClock from './component'

const mapStateToProps = state =>
  ({ time: state.currentTime })

export default connect(mapStateToProps)(AnalogueClock)
