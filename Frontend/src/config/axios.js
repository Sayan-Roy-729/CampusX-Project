import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://18.188.66.62/api/v1/ml',
    // baseURL: 'http://localhost:8080/api/v1/ml',
});

export default axiosInstance;