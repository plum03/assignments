import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Questions from './Questions'
import Question from './Questions/Question'
import Home from './Home'
import Header from './Header'


function App(props) {

    let style = {
        fontFamily: "Quicksand"
    }
    
    return (
        <div className='app-wrapper' style={style}>
            {/* <Header></Header> */}
            <Navbar></Navbar>
            <Switch>
                <Route exact path ="/" component={Home} />
                <Route path="/:categoryId" component={Questions} />
            </Switch>
           
        </div>
    )
}

export default App
