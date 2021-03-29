import React, { Component } from 'react'
import { List, Avatar } from 'antd'
class index extends Component {
    state = {
        data: [

        ]
    }
    componentDidMount() {
        this.token = PubSub.subscribe('MY TOPIC', (msg, data) => {
            this.setState({ data })
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)

    }
    render() {
        const { data } = this.state

        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar_url} />}
                            title={<a href={item.url}>{item.login}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        )
    }
}

export default index