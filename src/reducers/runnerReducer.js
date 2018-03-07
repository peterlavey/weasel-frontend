export default function (state = null, action) {
    switch (action.type) {
        case 'START_SERVICES':
            return action.isRunning;
        case 'STOP_SERVICES':
            return action.isRunning;
    }

    return state;
};