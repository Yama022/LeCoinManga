import { SET_GENRES } from '../actions/genre';

export const initialState = {
    genre: [],
}

const reducer = (state = initialState, action) => {
    switch (action.genre) {
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
