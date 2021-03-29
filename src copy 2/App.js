import React, { Component } from 'react'
import { NavLink, BrowserRouter, Route } from 'react-router-dom'

import Count from './components/Count'
import './App.css'


class App extends Component {
    render() {
        return (
            <div className='main'>
                <Count />
            </div>
        )
    }
}

export default App