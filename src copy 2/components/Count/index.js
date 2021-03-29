import React, { Component } from 'react'
import { INCREMENT, DECREMENT } from '../../redux/constant'
import { createDecrementAction, createIncrementAction, createIncrementActionAsync } from '../../redux/count-actions'

import store from '../../redux/store'

export default class Count extends Component {
    increment = () => {
        const { value } = this.selectRef
        store.dispatch(createDecrementAction(value * 1))
    }
    decrement = () => {
        const { value } = this.selectRef
        store.dispatch(createIncrementAction(value * 1))
    }
    incrementIfOdd = () => {
        let count = store.getState()
        const { value } = this.selectRef
        if (count % 2 !== 0) {
            store.dispatch(createDecrementAction(value * 1))
        }
    }

    incrementAsync = () => {
        const { value } = this.selectRef
        // setTimeout(() => {
        //     store.dispatch(createDecrementAction(value * 1))
        // }, 500)
        store.dispatch(createIncrementActionAsync(value * 1, 500))

    }
    render() {
        return (
            <div>
                <h1>count:{store.getState()}</h1>
                <select ref={c => this.selectRef = c} name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.incrementIfOdd}>incrementIfOdd</button>
                <button onClick={this.incrementAsync}>incrementAsync</button>
            </div>
        )
    }
}
