import {combineReducers, createStore} from "redux";
import menuReducer from "./reducers/menuReducer";

const reducer = combineReducers({
    menu: menuReducer,
})

const store = createStore(reducer)

export default store
