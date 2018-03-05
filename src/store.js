import reducers from "./reducers/reducers";
import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";

const initialState = {
    folders: []
};

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(reducers, initialState, middleware);