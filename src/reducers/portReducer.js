import {FOLDER_TYPE} from "../constants/constants";

export default function port(
    state = {
        port: '7000'
    },
    action
) {
    switch (action.type) {
        case 'GET_PORT':
            return action.port
    }

    return state;
};