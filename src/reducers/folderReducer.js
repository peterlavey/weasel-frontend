export default function (state = null, action) {
    switch (action.type) {
        case 'GET_FOLDER':
            return action.folder;
        case 'ADD_FOLDER':
            return action.folder;
        case 'ADD_REST':
            return action.folder;
    }

    return state;
};