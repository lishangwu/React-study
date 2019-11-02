import React, {Component} from 'react'
import PubSub from 'pubsub-js'

export default class index extends Component{
    constructor(props) {
        super(props);
        
    }
    render(){
        const {item} = this.props
        return(
            <div>
                <span>{item.username}</span>&nbsp;
                <span>{item.conent}</span>&nbsp;
            </div>
        )
    }
    
}