import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://18.216.75.208/api/v1/ml',
});

export default axiosInstance;