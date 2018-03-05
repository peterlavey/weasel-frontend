import foodReducer from "./reducers/foodReducer";
import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";

const initialState = {
    created: false,
    categories: []
};

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(foodReducer, initialState, middleware);