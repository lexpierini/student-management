import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './studentSlice'
import authentificationReducer from './authentificationSlice'

export const store = configureStore({
  reducer: {
      student: studentReducer,
      authentification: authentificationReducer,
  },
})
