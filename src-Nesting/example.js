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
                    <Route exact path="/" component={Home}>
                    </Route>
                    <Route path="/topics">
                        <Topics />
                    </Route>
                </Switch>

            </Router>
        )
    }
}

function Home() {
    return (
        <div>Home..</div>
    )
}

function Topics() {
    let { path, url } = useRouteMatch()
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
                <Route path={`${path}/:id`}>
                    <Topic />
                </Route>
            </Switch>

        </div>
    )
}

function Topic() {
    let { id } = useParams();
    return (
        <div>
            <h3>t..{id}</h3>
        </div>
    )
}