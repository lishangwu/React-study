import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers/index'

function logger({ getState, dispatch }){
    // return next => {
    //     return action => {
            
    //     }
    // }
    return next => action => {
        console.log('1.....will dispatch', action)
        const resultValue = next(action)
        console.log('2.....after dispatch', getState())
        return resultValue
    }
}

const store = createStore(reducers,  applyMiddleware(logger))

export default store