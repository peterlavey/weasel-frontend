import { combineReducers } from "redux";

import folders from "./folderReducer";

const reducers = combineReducers({
    folders
});

export default reducers;