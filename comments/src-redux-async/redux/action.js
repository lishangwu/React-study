import {INCREMENT, DECREMENT} from './action-types'

/**
*  同步action返回对象
   异步action返回函数
*/
export const increment = (number)=>({type:INCREMENT, data:number})
export const decrement = (number)=>({type:DECREMENT, data:number})
export const incrementAsync = (number)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(increment(number))
        },1000)
    }
}