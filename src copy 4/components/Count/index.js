import React, { Component } from 'react'


import { connect } from 'react-redux'
import { createDecrementAction, createIncrementAction, createIncrementActionAsync } from '../../redux/actions/count'

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
                <h1>Count C</h1>
                <h4>count:{this.props.persons.length}</h4>
                <select ref={c => this.selectRef = c} name="" id="">
                    <option key={1} value="1">1</option>
                    <option key={2} value="2">2</option>
                    <option key={3} value="3">3</option>
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
    state => ({ count: state.he, persons: state.persons }),
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementActionAsync,
    }
)(Count)