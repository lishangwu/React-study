import React,{Component} from 'react'
import { NavLink} from 'react-router-dom'
import './index.css'
export default class index extends Component{
    render(){
        return(
            <NavLink {...this.props} activeClassName='activeClass'></NavLink>
        )
    }
}