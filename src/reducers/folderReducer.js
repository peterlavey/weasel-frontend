export default function folder(
    state = {
        folders: []
    },
    action
) {
    switch (action.type) {
        case 'LIST_FOLDERS':
            return action.folders;
    }

    return state;
};