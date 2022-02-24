import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {},
    extraReducers: {},
})

export const { } = studentSlice.actions

export default studentSlice.reducer