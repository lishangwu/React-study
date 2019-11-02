import React, {Component} from 'react'

export default class index extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    increment = ()=>{
        const number = this.select.value*1
        const count = this.state.count
        this.setState({count:count+number})
    }
    decrement = ()=>{
        const number = this.select.value*1
        const count = this.state.count
        this.setState({count:count-number})
    }
    incrementIfOdd = ()=>{
        const number = this.select.value*1
        const count = this.state.count
        if(count%2 === 1){
            this.setState({count:count+number})
        }
    }
    incrementAsync = ()=>{
        const number = this.select.value*1
        const count = this.state.count
        setTimeout(()=>{
            this.setState({count:count+number})
        },1000)
    }
    render(){
        const {count} = this.state
        return(
            <div>
                <p>click {count} times</p>
                <select name="" id="" ref={sel => this.select = sel}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select> &nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                <button onClick={this.incrementAsync}>increment async</button>
            </div>
        )
    }
    
}