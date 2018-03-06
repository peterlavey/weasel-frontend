export default function runner(
    state = {
        isRunning: false
    },
    action
) {
    switch (action.type) {
        case 'START_SERVICES':
            return action.isRunning;
        case 'STOP_SERVICES':
            return action.isRunning;
    }

    return state;
};