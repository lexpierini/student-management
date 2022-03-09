import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../services/axiosService';

export const authentifier = createAsyncThunk("Authentication/Login", async (loginData, thunkAPI) => {
    try {
        const response = await axios.post("/api/Account/Login", loginData);

        axios.defaults.headers = { Authorization: `Bearer ${response.data.token}` }
        localStorage.setItem('email', loginData.email);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('expiration', response.data.expiration);

        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

const initialState = {}

export const authentificationSlice = createSlice({
    name: 'authentification',
    initialState,
    reducers: {},
    extraReducers: {},
})

export const { } = authentificationSlice.actions

export default authentificationSlice.reducer