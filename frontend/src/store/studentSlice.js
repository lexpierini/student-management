import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from './../services/axiosService';

const studentsAdapter = createEntityAdapter();

export const getStudents = createAsyncThunk("Student/Get", async () => {
    const response = await axios.get("/api/Students/GetStudents");
    return response.data;
});

export const addStudent = createAsyncThunk("Student/Add", async (student, thunkAPI) => {
    try {
        const response = await axios.post("/api/Students/CreateStudent", student);
        thunkAPI.dispatch(upsertOneStudent(response.data));
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const updateStudent = createAsyncThunk("Student/Update", async (student, thunkAPI) => {
    try {
        const response = await axios.put("/api/Students/UpdateStudent", student);
        thunkAPI.dispatch(upsertOneStudent(student));
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const {
    selectAll: selectAllStudents,
    selectById: selectStudentById,
} = studentsAdapter.getSelectors(store => store.student.students);

const initialState = {
    students: studentsAdapter.getInitialState(),
};

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        upsertOneStudent(state, action) {
            studentsAdapter.upsertOne(state.students, action.payload)
        },
    },
    extraReducers: {
        [getStudents.fulfilled]: (state, action) => {
            studentsAdapter.setAll(state.students, action.payload);
        }
    },
})

export const { upsertOneStudent } = studentSlice.actions

export default studentSlice.reducer