import { SET_GENRES } from '../actions/genre';

export const initialState = {
    genres: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
