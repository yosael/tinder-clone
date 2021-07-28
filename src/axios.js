import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVICE_URL || 'http://localhost:8001'
});

export default instance;