import React, { Component } from 'react'
import { connect } from 'react-redux'
import './app.css'

class App extends Component{

    state = {
        todo: ''
    }
    handleAddTodo = ()=>{
        const { todo } = this.state
        const { dispatch } = this.props
        dispatch({ type: 'add', title: todo })
        this.setState({ todo: '' })
    }
    handleClickTodoItem(todo){
        console.log('handleClickTodoItem: ', todo)
        const { dispatch } = this.props
        const todoNew = Object.assign({}, todo, { complete: !todo.complete })
        dispatch({
            type: 'update',
            todo: todoNew
        })
    }
    getTodoItemClass = (todo)=>{
        return todo.complete ? 'complete' : ''
    }
    handleShow(value){
        const { dispatch } = this.props
        dispatch({
            type: 'filter',
            value: value
        })
    }
    getTodos(){
        const { todos, filter } = this.props
        let todosFilter = []
        if(filter == 'all'){
            todosFilter = todos
        }else if(filter == 'complete'){
            todosFilter = todos.filter(todo => todo.complete === true)
        }else{
            todosFilter = todos.filter(todo => todo.complete === false)
        }
        return todosFilter
    }
    render(){
        const { todo } = this.state
        const todos = this.getTodos()
        // const { todos } = this.props
        return(
            <div>
                <h1>to do App</h1>
                <div>
                    <input type="text" value={todo} onChange={(event)=>this.setState({ todo: event.target.value })}/>
                    <button onClick={this.handleAddTodo}>Add Todo</button>
                </div>
                <ul>
                    {
                        todos.map((todo, index)=> <li className={this.getTodoItemClass(todo)} key={todo.id} onClick={this.handleClickTodoItem.bind(this, todo)}>{todo.title}</li> )
                    }
                </ul>

                <div>
                    <button onClick={()=>this.handleShow('all')}>全部</button>
                    <button onClick={this.handleShow.bind(this, 'complete')}>已完成</button>
                    <button onClick={this.handleShow.bind(this, 'active')}>未完成</button>
                </div>
            </div>
        )
    }
}

export default connect(
    (state)=>{
        console.log('app->connect->state', state)
        return {
            todos: state.todos,
            filter: state.filter
        }
    },
    (dispatch)=>{
        return {
            dispatch: dispatch
        }
    }
)(App)