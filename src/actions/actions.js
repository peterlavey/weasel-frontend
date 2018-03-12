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

export function addFolder(folder) {
    return (dispatch, getState)=> {
        const name = getState().folder.name;
        const body = folder;
        axios.post(`http://localhost:3002/weasel-api/add/folder/${name}`, body).then(response => {
            dispatch({
                type: 'ADD_FOLDER',
                folder: response.data
            });
        }).catch(err => {
            //dispatch();
        });
    }
}

export function addRest(rest) {
    return (dispatch, getState)=> {
        const name = getState().folder.name;
        const body = rest;
        axios.post(`http://localhost:3002/weasel-api/add/rest/${name}`, body).then(response => {
            dispatch({
                type: 'ADD_REST',
                folder: response.data
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

export function setPort(port) {
    return (dispatch)=> {
        let body = {port: parseInt(port, 10)};
        axios.post(`http://localhost:3002/weasel-api/options`, body).then(() => {
            dispatch({
                type: 'SET_PORT',
                port: port
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
        axios.post(`http://localhost:3002/weasel-api/start/${name}`, body).then(() => {
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
        axios.get(`http://localhost:3002/weasel-api/kill`).then(() => {
            dispatch({
                type: 'STOP_SERVICES',
                isRunning: false
            });
        }).catch(err => {
            //dispatch();
        });
    }
}