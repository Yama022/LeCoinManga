export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const SET_TYPES = 'SET_TYPES';

export const getAllTypes = () => ({
    type: GET_ALL_TYPES,
})

export const setTypes = (payload) => ({
    type: SET_TYPES,
    payload,
})