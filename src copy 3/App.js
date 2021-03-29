import React, { Component } from 'react'
import { NavLink, BrowserRouter, Route } from 'react-router-dom'

import Count from './components/Count'
// import Count from './containers/Count'


class App extends Component {
    render() {
        return (
            <div >
                <Count />
            </div>
        )
    }
}

export default App