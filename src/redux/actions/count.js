import { DECREMENT, INCREMENT } from '../constant'

export const increment = data => ({ type: INCREMENT, data })
export const decrement = data => ({ type: DECREMENT, data })
export const incrementAsync = (data, time = 500) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, time)
    }
}