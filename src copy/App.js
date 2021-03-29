import React, { Component } from 'react'

import PubSub from 'pubsub-js'

import Search from './Search'
import List from './List'

import './App.css'
class App extends Component {
    render() {
        return (
            <div className='main'>
                <Search />
                <List />
            </div>
        )
    }
}

export default App