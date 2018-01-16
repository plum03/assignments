import React, {Component} from 'react'
import {Switch, Route, Link} from "react-router-dom"

import SideBar from './SideBar.js'

function App(props) {

    return (
        <div>

            <SideBar />

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/people">People</Link>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/people" component={People}/>
            </Switch>
        </div>
    )
}

export default App;
