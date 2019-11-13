import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

export default class NestingExample extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to='/'>Home</Link>
                    <br />
                    <Link to='/topics'>Topics</Link>
                </div>

                <hr />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/topics" component={Topics}/>>
                    
                </Switch>

            </Router>
        )
    }
}

class Home extends React.Component {
    render(){
        return (
            <div>Home.........</div>
        )
    }
    
}

class Topics extends React.Component {
    render(){
        // let { path, url } = useRouteMatch()
        let {pathname} = this.props.location
        let path = '/topics'
        let url = path
        console.log('path:',path, 'url:',url);
        return (
            <div>
                <h2>Topics..</h2>
                <ul>
                    <li>
                        <Link to={`${url}/A`}>A</Link>
                    </li>
                    <li>
                        <Link to={`${url}/B`}>B</Link>
                    </li>
                    <li>
                        <Link to={`${url}/C`}>C</Link>
                    </li>
                </ul>
    
                <Switch>
                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/:id`} component={Topic}>
                    </Route>
                </Switch>
    
            </div>
        )
    }
}

class Topic extends React.Component {
    render(){
        // let { id } = useParams();
        let id = this.props.match.params.id
        return (
            <div>
                <h3>t..{id}</h3>
            </div>
        )
    }
    
}