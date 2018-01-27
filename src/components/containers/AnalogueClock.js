import { connect } from 'react-redux'

import AnalogueClock from '../ui/AnalogueClock'

const mapStateToProps = state =>
  ({ time: state.currentTime })

export default connect(mapStateToProps)(AnalogueClock)
