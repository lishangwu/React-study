import React, { Component } from 'react'
import { Button, Input } from 'antd'
import axios from 'axios'
// import PubSub from 'pubsub-js'

export default class index extends Component {

    state = {
        keyWord: ''
    }

    search = async () => {
        const { keywordElement: { state: { value } } } = this
        try {
            let res = await axios.get(`https://api.github.com/search/users?q=${value}`)
            PubSub.publish('MY TOPIC', res.data.items || [])
        } catch (error) {
            console.log(error.message)
        }
    }
    render() {
        return (
            <div style={{ width: 600 }} >
                <Input ref={c => this.keywordElement = c} />
                <Button onClick={this.search}>search</Button>
            </div>
        )
    }
}
