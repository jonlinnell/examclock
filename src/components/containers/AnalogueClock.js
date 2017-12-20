import AnalogueClock from '../ui/AnalogueClock'
import { connect } from 'react-redux'

const mapStateToProps = state =>
  ({
    time: state.currentTime
  })

export default connect(mapStateToProps)(AnalogueClock)
