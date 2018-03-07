export default function (state = [], action) {
    switch (action.type) {
        case 'GET_FOLDER':
            if(~state.indexOf(action.breadcrumb)){
                const breadcrumbWhitoutCurrent = state.slice(0, state.indexOf(action.breadcrumb));
                return [action.breadcrumb, ...breadcrumbWhitoutCurrent];
            }else{
                return [action.breadcrumb, ...state];
            }
    }

    return state;
};