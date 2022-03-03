import axios from 'axios';

const axiosService = axios.create({
    baseURL: "https://localhost:5001"
})

export default axiosService;