import React, {Component} from 'react'
import './Form.css';

export default class Form extends Component {
    constructor(props) {
        super(props);
        let {title, description, price, imgUrl, completed} = props;
        this.state = {
            inputs: {
                title: title || "",
                description: description || "",
                price: price || "",
                imgUrl: imgUrl || "",
                completed: completed || false
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    clearInputs() {
        this.setState({
            inputs: {
                title: "",
                description: "",
                price: "",
                imgUrl: "",
                completed: false
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault(); // to prevent the page from reloading and wiping data on form submit
        let todo = {...this.state.inputs};
        todo.price = Number(this.state.inputs.price);
        this
            .props
            .submit(todo, this.props.id);
        if (this.props.clear) this.clearInputs();
        // this.props.clear
        //     ? this.clearInputs()
        //     : null;
    }

    handleChange(e) {
        let {name, value, checked, type} = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value === "checkbox"
                        ? checked
                        : value
                }
                // copy over prevState inputs first, then set whatever name element we are
                // changing to its value use ternary: does value === checkbox? if yes give value
                // = checked, if no give value = value
            }
        })

    }

    render() {
        let {title, description, price, imgUrl, completed} = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>

                <input
                    onChange={this.handleChange}
                    value={title}
                    name="title"
                    type="text"
                    placeholder="title"/>
                <input
                    onChange={this.handleChange}
                    value={description}
                    name="description"
                    type="text"
                    placeholder="description"/>
                <input
                    onChange={this.handleChange}
                    value={price}
                    name="price"
                    type="text"
                    placeholder="price"/>
                <input
                    onChange={this.handleChange}
                    value={imgUrl}
                    name="imgUrl"
                    type="text"
                    placeholder="Image URL"/>

                <label htmlFor="completed">
                    Completed:
                    <input
                        onChange={this.handleChange}
                        name="completed"
                        checked={completed}
                        id="completed"
                        type="checkbox"/>
                </label>
                <button type="submit">Submit</button>

            </form>
        )
    }
}
