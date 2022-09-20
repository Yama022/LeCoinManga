import { 
    GET_ALL_TYPES,
    setTypes,
} from '../actions/type';

import api from './utils/api';

const type  = (store) => (next) => async (action) => {
    const { dispatch } = store;
    switch (action.type) {
        case GET_ALL_TYPES:
            const response = await api.get('/type');
            console.log(response.data);
            dispatch(setTypes(response.data));
            break;
        default:
            next(action);
    }
}

export default type;