import CountUI from '../../components/Count'
// import store from '../../redux/store'

import { connect } from 'react-redux'
import { createDecrementAction, createIncrementAction, createIncrementActionAsync } from '../../redux/count-actions'

export default connect(
    state => ({ count: state }),
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementActionAsync,
    }
)(CountUI)