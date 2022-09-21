import axios from 'axios';

const api = axios.create({
    baseURL: 'https://lecoinmanga-api.herokuapp.com/api/v1',
    timeout: 20000
});

export default api;