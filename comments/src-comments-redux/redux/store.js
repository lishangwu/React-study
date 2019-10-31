import {createStore, applyMiddleware} from 'redux'
import {comments} from './reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(comments, composeWithDevTools(applyMiddleware(thunk)))
console.log(store);

export default store