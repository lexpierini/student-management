import axios from 'axios';

const axiosService = axios.create({
    baseURL: "https://localhost:5001",    
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})

export default axiosService;