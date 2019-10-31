import {ADD_COMMENT, DEL_COMMENT, RECEIVE_COMMENTS} from './action-types'

export const addComment = (comment)=>({type: ADD_COMMENT, data: comment})
export const delComment = (index)=>({type: DEL_COMMENT, data: index})

//同步接收
 const receiveComments = (comments)=>({type: RECEIVE_COMMENTS, data:comments})
//异步从后台获取
export const getComments = ()=>{
    return dispatch=>{
        setTimeout(()=>{
            const comments = [
                {username:'sb', content:'hello'},
                {username:'sb2', content:'hello2'},
            ]
            dispatch(receiveComments(comments))
        },1000)
    }
}