import React from 'react'
import ReactDOM from 'react-dom'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'

import store from './redux/store'


import App from './App'

moment.locale('zh-cn')

ReactDOM.render(
    <App />
    ,
    document.getElementById('root'))


store.subscribe(() => {
    ReactDOM.render(
        <App />
        ,
        document.getElementById('root'))

})