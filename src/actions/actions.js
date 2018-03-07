import axios from 'axios';

export function getFolder(folderSelected='root') {
    return (dispatch)=> {
        axios.get(`http://localhost:3002/weasel-api/list/folders/${folderSelected}`).then(response => {
            dispatch({
                type: 'GET_FOLDER',
                folder: response.data,
                breadcrumb: folderSelected
            });
        }).catch(err => {
            //dispatch();
        });
    }
}

export function getPort() {
    return (dispatch)=> {
        axios.get(`http://localhost:3002/weasel-api/list/options`).then(response => {
            dispatch({
                type: 'GET_PORT',
                port: response.data.port
            });
        }).catch(err => {
            //dispatch();
        });
    }
}

export function startServices() {
    return (dispatch, getState)=> {
        const name = getState().folder.name;
        const body = getState().folder.content;
        axios.post(`http://localhost:3002/weasel-api/start/${name}`, body).then(response => {
            dispatch({
                type: 'START_SERVICES',
                isRunning: true
            });
        }).catch(err => {
            //dispatch();
        });
    }
}

export function stopServices() {
    return (dispatch)=> {
        axios.get(`http://localhost:3002/weasel-api/kill`).then(response => {
            dispatch({
                type: 'STOP_SERVICES',
                isRunning: false
            });
        }).catch(err => {
            //dispatch();
        });
    }
}