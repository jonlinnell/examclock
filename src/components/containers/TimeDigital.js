import TimeDigital from '../ui/TimeDigital'
import { connect } from 'react-redux'

const mapStateToProps = (state) =>
  ({
    time: state.currentTime
  })

export default connect(mapStateToProps)(TimeDigital)
