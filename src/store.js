import reducers from "./reducers/reducers";
import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import {FOLDER_TYPE} from './constants/constants';

const initialState = {
    folder: {},
    type: FOLDER_TYPE.EMPTY,
    isRunning: false,
    port: '7000',
    breadcrumb: []
};

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(reducers, initialState, middleware);