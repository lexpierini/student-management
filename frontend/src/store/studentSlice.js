import { createSlice } from '@reduxjs/toolkit'
import axios from './../services/axiosService';

const initialState = {}

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {},
    extraReducers: {},
})

export const { } = studentSlice.actions

export default studentSlice.reducer