import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
    add = () => {
        let name = this.nameRef.value
        let age = this.ageRef.value
        const personObj = { id: nanoid(), name, age }
        this.props.addPerson(personObj)
    }
    render() {
        return (
            <div>
                <h1>Person C</h1>
                <input ref={c => this.nameRef = c} type="text" />
                <input ref={c => this.ageRef = c} type="text" />
                <button onClick={this.add}>添加</button>
                <ul>
                    {
                        this.props.persons.map(item => {
                            return <li key={item.id}>{`id: ${item.id} name: ${item.name} age: ${item.age}`}</li>
                        })
                    }
                </ul>

            </div>
        )
    }
}
export default connect(
    state => ({ persons: state.persons }),
    {
        addPerson: createAddPersonAction
    }


)(Person)