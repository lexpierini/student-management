import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { clearToken } from '../services/axiosService';
import { setToken } from '../services/axiosService';

export const authentifier = createAsyncThunk("Authentication/Login", async (loginData, thunkAPI) => {
    try {
        const response = await axios.post("/api/Account/Login", loginData);

        setToken(response.data.token)
        localStorage.setItem('email', loginData.email);
        localStorage.setItem('expiration', response.data.expiration);

        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

const initialState = {
    userIsLogged: false,
}

export const authentificationSlice = createSlice({
    name: 'authentification',
    initialState,
    reducers: {
        logout(state, action) {
            state.userIsLogged = false;
            localStorage.clear();
        }
    },
    extraReducers: {
        [authentifier.fulfilled]: (state, action) => {
            state.userIsLogged = true
            clearToken();
        }
    },
})

export const { logout } = authentificationSlice.actions

export default authentificationSlice.reducer