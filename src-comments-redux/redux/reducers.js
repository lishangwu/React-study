import {ADD_COMMENT, DEL_COMMENT, RECEIVE_COMMENTS} from './action-types'

const initComments = [
    // {username:'sb', content:'hello'},
    // {username:'sb2', content:'hello2'},
]
export function comments(state = initComments, action){
    console.log(action);
    switch(action.type){
        case ADD_COMMENT:
            return [action.data, ...state]
        case DEL_COMMENT:
            return state.filter((c, index)=> index!==action.data)
        case RECEIVE_COMMENTS:
            return action.data
        default:
            return state
    }
}