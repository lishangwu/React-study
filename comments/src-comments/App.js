import React from 'react';
import './App.css';
import { Row, Col } from 'antd';
import {BrowserRouter} from 'react-router-dom'

import MyCommentsApp from './components/MyCommentsApp'
import SearchGithubUser from './components/search-github-user-pubsub/app'
import App1 from './components-router/components/app'
import AppRedux from './react-redux/app'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <AppRedux />
        </BrowserRouter>
    </div>
  );
}

export default App;
