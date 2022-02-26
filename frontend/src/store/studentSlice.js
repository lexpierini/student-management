import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

axios.defaults.baseURL = ''


const initialState = {}

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {},
    extraReducers: {},
})

export const { } = studentSlice.actions

export default studentSlice.reducer