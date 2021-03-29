import { DECREMENT, INCREMENT } from '../constant'

let initState = 123
export default (preState = initState, action) => {
    let { type, data } = action
    if (type == INCREMENT) {
        return preState + data
    }
    if (type == DECREMENT) {
        return preState - data
    }
    return preState
}