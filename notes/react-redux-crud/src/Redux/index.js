import { createStore, combineReducers } from "redux";
import recipes from './recipes.js'

const rootReducer = (combineReducers({recipes}));

let store = createStore(rootReducer);
export default store;

// export default createStore(rootReducer);