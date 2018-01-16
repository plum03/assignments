import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import {connect} from 'react-redux'

import {createStore, applyMiddleware} from 'redux'
import reducer from './redux'

import thunk from 'redux-thunk'

import App from './App'

const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(thunk)
)

store.subscribe(() => {
    console.log(store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)