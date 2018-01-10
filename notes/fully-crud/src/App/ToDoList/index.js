import React, {Component} from 'react';
// Use AXIOS to send HTTP requests to/from APIs

import Form from '../shared/Form'
import Loading from "../shared/Loading";


import axios from "axios";
import {Link} from "react-router-dom";

import './ToDoList.css'

let todoUrl = "https://api.vschool.io/ericastone/todo/";


export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            loading: true
        }
        this.addToDo = this.addToDo.bind(this);
    }
    
    componentDidMount() {
        // syntax to make get request to API
        axios.get(todoUrl)
        // then and catch take functions as parameters
            .then((response) => {
            let {data} = response;
            this.setState({todos: data, loading: false})

            }).catch((err) => {
                console.error(err);
                this.setState({
                    todos: [],
                    loading: false
                })
            })
    }

    addToDo(todo) {
        // the todo param is an object referencing this.state.inputs
        axios.post(todoUrl, todo)
            .then((response) => {
                let { data } = response;
                // console.log(response);
                this.setState((prevState) => {
                    let newTodos = [...prevState.todos, data];
                    return {
                        todos: newTodos
                    }
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }
    render() {
        let {todos, loading} = this.state
        return (
           
                loading ?
                    <Loading></Loading>
                    :
                    <div>
                        <Form submit={this.addToDo} clear></Form>
                        <div>
                            {todos.map((todo) => {
                                let {title, _id} = todo;
                                return (
                                    <Link to={`/todos/${_id}`} key={_id}>{title}</Link>
                                )
                            })}
                        </div>
                        {/* todo links will go here */}
                        {/* <Switch>
                            <Route path="/todos/:id" component={ToDoItem} ></Route>
                        </Switch> */}
                    </div>
            
        )
    }
}
