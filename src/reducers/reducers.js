import { combineReducers } from "redux";

import folder from "./folderReducer";
import type from './typeReducer';
import isRunning from './runnerReducer';
import port from './portReducer';

const reducers = combineReducers({
    folder,
    type,
    isRunning,
    port
});

export default reducers;