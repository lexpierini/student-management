import axios from 'axios';

const axiosService = axios.create({
    baseURL: "https://localhost:5001",
})

export function getToken() {
    return localStorage.getItem("token");
}

export function setToken(token) {
    axiosService.defaults.headers = { Authorization: `Bearer ${token}` }
    localStorage.setItem('token', token);
}

export function clearToken() {
    delete axiosService.defaults.headers;
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
}

export default axiosService;