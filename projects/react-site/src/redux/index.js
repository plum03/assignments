import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import categories from './category'


const rootReducer = combineReducers({
    categories
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))