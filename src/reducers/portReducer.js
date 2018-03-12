export default function (state = null, action) {
    switch (action.type) {
        case 'GET_PORT':
            return action.port;
        case 'SET_PORT':
            return action.port;
    }

    return state;
};