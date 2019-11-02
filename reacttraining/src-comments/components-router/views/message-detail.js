import React from 'react'

const allMessage = [
    {id:1, title:'m01', content:'asd1'},
    {id:2, title:'m02', content:'asd2'},
    {id:3, title:'m03', content:'asd3'},
]
export default function MessageDetail(props){
    const {id} = props.match.params
    const message = allMessage.find(m=>m.id==id)
    return (
        <ul>
            <li>ID: {message.id}</li>
            <li>title: {message.title}</li>
            <li>content: {message.content}</li>

        </ul>
    )
}