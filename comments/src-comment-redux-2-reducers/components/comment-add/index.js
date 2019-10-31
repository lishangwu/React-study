import React, {Component} from 'react'

export default class index extends Component{
    constructor(props) {
        super(props);
        
    }
    handleClick = ()=>{
        const username = this.input.value
        const conent = this.textarea.value
        this.props.addComment({username, conent})
    }
    render(){
        return(
            <div>
                <input type="text" className="form-control" ref={input=>this.input = input} placeholder="Text input"/>
                <textarea className="form-control" rows="3" ref={textarea=>this.textarea = textarea} ></textarea>
                <button type="button" className="btn btn-info" onClick={this.handleClick}>AddComment</button>
            </div>
        )
    }
    
}