import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "../features/Student/StudentSlice";


const store = configureStore({
    reducer:{
        studentReducer: StudentReducer,
    }
})

export default store;