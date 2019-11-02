import React,{Component} from 'react'

class index extends Component{
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick(index){
        this.props.deleteCommentByIndex(index)
    }
    render(){
        const {todos} = this.props
        const display = todos.length === 0? 'block' : 'none'
        return (
            <div>
                <h1 style={{display}}>没有评论</h1>
                <div>

                    {
                        todos.map((todo, index)=> <p key={index} onClick={this.handleClick.bind(this,index)} >{todo.id + ":" +todo.username + ":" +todo.content}</p> )
                    }
                </div>
            </div>
            
        )
    }
    
}

export default index