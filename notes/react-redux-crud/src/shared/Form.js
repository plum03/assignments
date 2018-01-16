//this Form is a template that will handle both add and edit functions
import React, { Component } from 'react'
import {connect} from 'react-redux'

//import Action Creators
import {addRecipe, editRecipe} from '../Redux/recipes'

class Form extends Component {
    constructor(props) {
        super(props);
        let  {name, category, cookTime} = props;
        
        this.state = {
            inputs: {
                name: name || "",
                category: category || "",
                cookTime: cookTime || ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        //we don't know which action creator to use here ... we are using the same template to both "add" and "edit" 
        // check whether props includes 'edit' or 'add' and call the corresponding action creator
        let {editRecipe, addRecipe, add, index} = this.props;

        if(add){
            addRecipe(this.state.inputs)
        } else {
            editRecipe(this.state.inputs, index)
        }
        //clear the inputs for add function, but not for edit
        if (this.props.clear) {
            this.clearInputs();
        }

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
            iputs: {
                name:"",
                category: "",
                cookTime: ""
            }
        })
    }

    render() {
        let {name, category, cookTime} = this.state.inputs
        return (
            <div>
                <form onSubmit={this.handleSubmit} action="">
                    <input onChange={this.handleChange} value={name}name="name" type="text" placeholder="recipe name"/>
                    <input onChange={this.handleChange} value={category}name="category" type="text" placeholder="category"/>
                    <input onChange={this.handleChange} value={cookTime}name="cookTime" type="text" placeholder="cook time"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addRecipe, editRecipe})(Form)
