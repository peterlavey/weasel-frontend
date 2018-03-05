import axios from 'axios';


export function getFolders() {
    return function(dispatch) {
        axios.get(`http://localhost:3002/weasel-api/list/folders`).then(response => {
            dispatch({
                type: 'LIST_FOLDERS',
                folders: response.data
            });
        }).catch(err => {
            //dispatch();
        });
    }
}