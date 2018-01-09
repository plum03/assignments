import React from 'react'
import Name from './Name'

import React, {Component} from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            inputs: {
                name: ""
            }
        }
    }

    // Handle change, add name function

    render() {
        let {data} = this.state
        return (
            <div>
                <form action="">
                    <input type="text"/>
                </form>
                <ul>
                    {data.map((name) => { 
                        return (
                        <li key = {i}>{name}</li>
                    )
                })}
                </ul>
            </div>
        )
    }
}
