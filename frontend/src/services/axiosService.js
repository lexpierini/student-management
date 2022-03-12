import axios from 'axios';

const axiosService = axios.create({
    baseURL: "https://localhost:5001",
})

export function setToken(token) {
    axiosService.defaults.headers = { Authorization: `Bearer ${token}` }
}

export function clearToken() {
    delete axiosService.defaults.headers;
}

export default axiosService;