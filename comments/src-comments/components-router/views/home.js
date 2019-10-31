import React, {Component} from 'react'
import {NavLink, Switch, Route, Redirect} from 'react-router-dom'

import MyNavLink from '../components/my-NavLink'

import News from './news'
import Message from './message'

export default class index extends Component{
    constructor(props) {
        super(props);
        
    }

    render(){
        return(
            <div>
                <h2>Home ..</h2>
                <div>
                    <ul className='nav nav-tabs'>
                        <li key={'news'}> <MyNavLink to='/home/news'>news</MyNavLink> </li>
                        <li key={'messages'}> <MyNavLink to='/home/messages'>messages</MyNavLink> </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path='/home/news' component={News}/>
                            <Route path='/home/messages' component={Message}/>
                            <Redirect to='/home/news'></Redirect>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
    
}