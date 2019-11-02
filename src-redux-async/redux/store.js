import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {counter} from './reducers'
const store = createStore(counter, composeWithDevTools(applyMiddleware(thunk)))
console.log(store);

export default store