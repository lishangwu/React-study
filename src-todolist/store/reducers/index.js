const initState = {
    todos: [],
    filter: 'all', //all, complete, active
}


function createGenID(){
    let id = 0
    return function(){
        return id++
    }
}
const genId = createGenID()

function todoList(state=initState, action){
    switch(action.type){
    case 'add':
    {
        const todos = [...state.todos, { id: genId(), title: action.title, complete: false }]
        const stateNew = Object.assign({}, state, { todos: todos })
        return stateNew 
    }
    case 'update':
    {
        let todosNew = []
        for(let i=0;i<state.todos.length; i++){
            if(state.todos[i].id === action.todo.id){
                todosNew.push(action.todo)
            }else{
                todosNew.push(state.todos[i])
            }
        }
        const stateNew = Object.assign({}, state, { todos: todosNew })
        return stateNew 
    }
    case 'filter':
    {
        const stateNew = Object.assign({}, state, { filter: action.value })
        return stateNew 
    }
    default:
        return state
    }
}

export default todoList