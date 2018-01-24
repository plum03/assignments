import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Category from './Category'
import Questions from './Questions'
import Question from './Questions/Question'
import Home from './Home'


function App(props) {
    return (
        <div>
            <Category></Category>
            <Switch>
                <Route exact path ="/" component={Home} />
                <Route path={`/category`} component={Questions} />
                <Route path={`/category`} component={Question} />
            </Switch>
            {/* <Switch>
                    Route path="/trivia/:category" component=Category
                </Switch> */}
        </div>
    )
}

export default App
