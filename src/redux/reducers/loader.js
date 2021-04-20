let intialState = {
    loading: false,
    loader: false
};
const loader = (state = intialState, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            };
        case 'SET_LOADER':
            return {
                ...state,
                loader: action.payload,
            };
        default:
            return state;
    }
};

export default loader;
