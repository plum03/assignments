import React, { Component } from 'react'
import List from './List'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            names: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        let value = e.target.value;
        this.setState({
            input: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState((prevNames) => {
            return ({
                names: [...prevNames, this.state.input]
            })
        })
    }



    render() {
        let {input, names} = this.state
        return (
            <div>
                <input onChange={this.handleChange} type="text" placeholder="type name here ..."/>
                <h1>{input}</h1>
                <button onClick={this.handleSubmit} >Add Name</button>
                <ol>
                    {names.map((name, i) => {
                        return <List name={name} index = {i + name}></List>
                    })}
                </ol>
            </div>
        )
    }
}
