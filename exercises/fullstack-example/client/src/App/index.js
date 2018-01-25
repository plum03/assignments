import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    componentDidMount () {
        axios.get("http://localhost:5050/bounty")
        .then((response) => {
            console.log(response.data)
        })
    }
    render() {
        return (
            <div>
                test
            </div>
        )
    }
}
