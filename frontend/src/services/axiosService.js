import axios from 'axios';

let _token = localStorage.getItem("token");

export function getToken() {
    return _token;
}

export function setToken(token) {
    _token = token;
    localStorage.setItem('token', token);
}

const axiosService = axios.create({
    baseURL: "https://localhost:5001",
    headers: {
        Authorization: `Bearer ${_token}`
    }
})

export default axiosService;