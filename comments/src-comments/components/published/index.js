import React,{Component} from 'react'
import { Row, Col, Button,Input } from 'antd';

class index extends Component{
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick = ()=>{
        console.log('handleClick:',this);
        const username = this.usernameInput.value || 'nothing'
        const content = this.contentInput.value || 'nothing'
        this.props.addTodos({username, content})
    }
    render(){
        return(
            <div>
                username: <input type="text" ref={input=>this.usernameInput = input}/> <br/>
                component: <textarea name="" id="" cols="30" rows="10" ref={input=>this.contentInput = input}></textarea> <br/>
                <button onClick={this.handleClick}>button</button>
            </div>
        )
    }
    
}

export default index