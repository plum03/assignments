import React from 'react'

import Category from './Category'

import TriviaList from './TriviaList'
import Question from './Question'


function App(props) {
    return (
        <div>
            <Category></Category>
            {/* <TriviaList></TriviaList>
            <Question></Question> */}
            {/* <Switch>
                    Route path="/trivia/:category" component=Category
                </Switch> */}
        </div>
    )
}

export default App
