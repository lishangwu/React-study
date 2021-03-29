import { DECREMENT, INCREMENT } from '../constant'

const initState = 123
export default (preState = initState, action) => {
    const { type, data } = action
    if (type == INCREMENT) {
        return preState + data
    }
    if (type == DECREMENT) {
        return preState - data
    }
    return preState
}