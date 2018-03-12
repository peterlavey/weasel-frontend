import {FOLDER_TYPE} from '../constants/constants';

export default function (state = null, action) {
    switch (action.type) {
        case 'GET_FOLDER':
            if(action.folder.folders.length) {
                return FOLDER_TYPE.FOLDER;
            }else if(action.folder.content.length) {// || action.folder.group.length){
                return FOLDER_TYPE.REST;
            }else{
                return FOLDER_TYPE.EMPTY;
            }
    }

    return state;
};