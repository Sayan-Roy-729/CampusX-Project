import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'http://18.216.86.171/api/v1/ml',
    baseURL: 'http://localhost:8080/api/v1/ml',
});

export default axiosInstance;