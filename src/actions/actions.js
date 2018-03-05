import axios from 'axios';


export function getFolders(folderSelected='') {
    return (dispatch)=> {
        axios.get(`http://localhost:3002/weasel-api/list/folders/${folderSelected}`).then(response => {
            dispatch({
                type: 'LIST_FOLDERS',
                folders: response.data
            });
        }).catch(err => {
            //dispatch();
        });
    }
}

export function setCurrentFolder(currentFolder) {
    return (dispatch)=> {
        dispatch({
            type: 'SET_CURRENT_FOLDER',
            currentFolder
        });
    }
}