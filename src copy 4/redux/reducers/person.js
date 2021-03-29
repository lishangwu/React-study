import { DECREMENT, INCREMENT, ADD_PERSON } from '../constant'

const initState = [
    { id: 0, name: 'tom', age: 18 }
]
export default (preState = initState, action) => {
    console.log('personReudcer,,', preState)
    const { type, data } = action
    if (type == ADD_PERSON) {
        return [data, ...preState]
    }
    return preState
}