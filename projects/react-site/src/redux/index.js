import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import category from './category'


const rootReducer = combineReducers({
    category
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))