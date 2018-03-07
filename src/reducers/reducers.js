import { combineReducers } from 'redux';

import folder from './folderReducer';
import type from './typeReducer';
import isRunning from './runnerReducer';
import port from './portReducer';
import breadcrumb from './breadcrumbReducer';

const reducers = combineReducers({
    folder,
    type,
    isRunning,
    port,
    breadcrumb
});

export default reducers;