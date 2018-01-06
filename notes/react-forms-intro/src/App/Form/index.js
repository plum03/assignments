import React, {Component} from "react";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }

        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChange(event) {
        let {name, value} = event.target

        this.setState((prevState) => {
            return {
                inputs : {
                ...prevState.inputs,
                [name]: value
            }}
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        let {username, password} = this.state.inputs;

        alert(`Hello!  You are now logged in as ${username}`)
    }

    render() {
        let {username, password} = this.state.inputs;
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <h3>Sign Up Here!</h3>
                <input
                    onChange={this.handleChange}
                    value={username}
                    name="username"
                    type="text"
                    placeholder="username"/>
                <input
                    onChange={this.handleChange}
                    value={password}
                    name="password"
                    type="password"
                    placeholder="password"/>
                <button>Sumbit</button>
            </form>
        )
    }
};

export default Form;