import React, { Component } from 'react'
import Count from './components/Count'
// import Count from './containers/Count'
import Person from './components/Person'


class App extends Component {
    render() {
        return (
            <div >
                <Count />
                <hr />
                <Person />
            </div>
        )
    }
}

export default App