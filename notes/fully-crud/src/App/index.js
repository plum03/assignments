import React from 'react'
import './App.css'
import ToDoList from './ToDoList'
import { Route, Switch, Link } from 'react-router-dom';
import ToDoItem from './ToDoList/ToDoItem'


function App(props) {
    return (
        <div className="app-wrapper">
            
            <Link to="/"><h1>My To-Dos</h1></Link>
            {/* to-do list */}
            <Switch>
                <Route exact path = "/" component={ToDoList}></Route>
                <Route path="/todos/:id" component={ToDoItem} ></Route>
            </Switch>

            <footer>&copy;2018</footer>
        </div>
    )
}

export default App
