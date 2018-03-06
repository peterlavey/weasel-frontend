export default function folders(
    state = {
        folder: {}
    },
    action
) {
    switch (action.type) {
        case 'GET_FOLDER':
            return action.folder;
    }

    return state;
};