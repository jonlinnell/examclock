import { connect } from 'react-redux'

import App from '../ui/App'

const mapStateToProps = state =>
  ({ timers: state.timers })

export default connect(mapStateToProps)(App)
