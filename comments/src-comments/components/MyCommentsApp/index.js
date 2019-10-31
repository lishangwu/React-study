import React,{Component} from 'react'
import { Row, Col } from 'antd';

import Published from '../published'
import Show from '../show'
var count = 0
class index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todos:[]
        }
        this.addTodos = this.addTodos.bind(this)
        this.deleteCommentByIndex = this.deleteCommentByIndex.bind(this)
    }
    addTodos(todo){
        todo.id = count++
        const {todos} = this.state
        todos.unshift(todo)
        this.setState({todos})
    }
    deleteCommentByIndex(id){
        const {todos} = this.state
        const newTodos = []
        todos.forEach((todo, index)=>{
            if(id !== index){
                newTodos.push(todo)
            }
        })
        this.setState({todos: newTodos})
    }
    render(){
        const {todos} = this.state
        return(
            <div className="App">
            <Row>
                <Col span={12}>
                    <Published addTodos={this.addTodos}></Published>
                </Col>
                <Col span={12}>
                    <Show todos={todos} deleteCommentByIndex={this.deleteCommentByIndex}></Show>
                </Col>
            </Row>
    </div>
        )
    }
    
}

export default index