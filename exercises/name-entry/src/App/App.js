import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            names: []
        }
    }

    render() {
        return (
            <div>
                <input type="text"/>
                <h1>Name</h1>
                <button>Add Name</button>
            </div>
        )
    }
}
