import { connect } from 'react-redux'

import MainView from './component'

const mapStateToProps = state =>
  ({ timers: state.timers })

export default connect(mapStateToProps)(MainView)
