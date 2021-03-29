import React, { Component } from 'react'


import { connect } from 'react-redux'
import { createDecrementAction, createIncrementAction, createIncrementActionAsync } from '../../redux/count-actions'

class Count extends Component {
    increment = () => {
        const { value } = this.selectRef
        this.props.jia(value * 1)
    }
    decrement = () => {
        const { value } = this.selectRef
        this.props.jian(value * 1)
    }
    incrementIfOdd = () => {
        const { value } = this.selectRef
        if (this.props.count % 2 == 1) {
            this.props.jia(value * 1)
        }
    }

    incrementAsync = () => {
        const { value } = this.selectRef
        this.props.jiaAsync(value * 1, 500)

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>count:{this.props.count}</h1>
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

export default connect(
    state => ({ count: state }),
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementActionAsync,
    }
)(Count)