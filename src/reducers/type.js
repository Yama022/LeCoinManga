import { SET_TYPES } from '../actions/type';

export const initialState = {
    types: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        default:
            return state;
    }
}

export default reducer;