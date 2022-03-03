import { createSlice } from '@reduxjs/toolkit'
import axios from './../services/axiosService';

const initialState = {}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: {},
})

export const { } = loginSlice.actions

export default loginSlice.reducer