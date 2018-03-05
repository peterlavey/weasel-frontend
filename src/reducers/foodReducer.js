export default function reducer(
    state = {},
    action
) {
    switch (action.type) {
        case 'ADD_FOOD':
            return {
                ...state,
                created: false,
                categories: action.payload
            };
        case 'LIST_FOOD':
            return {
                ...state,
                created: true,
                categories: action.payload
            };
        case 'REMOVE_CATEGORY':
            return {
                ...state,
                created: true,
                categories: state.categories.filter(category => category.name !== action.category.name)
            };
    }

    return state;
};