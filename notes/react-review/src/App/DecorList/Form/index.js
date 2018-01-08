import React, {Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                size: props.size || "",
                color: props.color || "",
                type: props.typs || ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        let {name, value} = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                size: "",
                color: "",
                type: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submit(this.state.inputs, this.props.index);
        this.clearInputs();

    }

    render() {
        let {size, color, type} = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="size">
                    Pick a size:
                    <select onChange={this.handleChange} name="size" id="size" value={size}>
                        <option value="sm">Small</option>
                        <option value="md">Medium
                        </option>
                        <option value="lg">Large</option>
                    </select>
                </label>
                <input type="text"/>
            </form>
        )
    }
}

export default Form;