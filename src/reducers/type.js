import { GET_ALL_TYPES } from '../actions/types';

export const initialState = {
    types: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload
            }
        default:
            return state;
    }
}

export default reducer;