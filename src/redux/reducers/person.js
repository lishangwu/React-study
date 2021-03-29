import { ADD_PERSON } from '../constant'

let initState = [
    { id: 0, name: 'Tom', age: 18 }
]
export default (preState = initState, action) => {
    let { type, data } = action
    if (type == ADD_PERSON) {
        return [data, ...preState]
    }
    return preState
}