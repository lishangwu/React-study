import React, {Component} from 'react'
import {NavLink, Switch, Route, Redirect} from 'react-router-dom'
import MyNavLink from '../components/my-NavLink'
import MessageDetail from './message-detail'
export default class index extends Component{
    constructor(props) {
        super(props);
        this.state={
            messages:[]
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            const messages = [
                {id:1, title:'m001'},
                {id:2, title:'m002'},
                {id:3, title:'m003'},
            ]
            this.setState({messages})
        },1)
    }

    showDetail = (id)=>{
        this.props.history.push(`/home/messages/messagedetail/${id}`)
    }
    showDetail2 = (id)=>{
        this.props.history.replace(`/home/messages/messagedetail/${id}`)
    }

    render(){
        return(
            <div>
                <ul>
                {
                        this.state.messages.map((m, index)=> (
                            <li key={index}>
                                <MyNavLink to={`/home/messages/messagedetail/${m.id}`}>{m.title}</MyNavLink>
                                <button onClick={()=>{this.showDetail(m.id)}}>push 查看</button>
                                <button onClick={()=>{this.showDetail2(m.id)}}>replace 查看</button>
                            </li>
                        ) )
                    }
                </ul>
                <Route path='/home/messages/messagedetail/:id' component={MessageDetail}></Route>
            </div>
        )
    }
    
}