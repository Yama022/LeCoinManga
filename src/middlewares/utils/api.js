import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 20000
});

export default api;