import React from 'react'
import { Switch, Route } from "react-router-dom"

import SideBar from './SideBar.js'
import Person from './Person.js'


function App(props) {

    return (
        <div>

            <SideBar />
            <Switch>
                <Route path="/person/:id" component={Person}/>
            </Switch>

            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/people">People</Link>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/people" component={People}/>
            </Switch> */}
        </div>
    )
}

export default App;
