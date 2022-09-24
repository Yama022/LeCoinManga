import { 
    GET_ALL_GENRES,
    setGenres,
} from '../actions/genre';

import api from './utils/api';

const genre  = (store) => (next) => async (action) => {
    const { dispatch } = store;
    switch (action.genre) {
        case GET_ALL_GENRES:
            const response = await api.get('/type');
            dispatch(setGenres(response.data));
            break;
        default:
            next(action);
    }
}

export default genre;
