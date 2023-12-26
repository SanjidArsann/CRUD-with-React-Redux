// const { createSlice } = require("@reduxjs/toolkit")
import {createSlice} from "@reduxjs/toolkit"
// const {v4: uuidv4} = require('uuid');
import uuid from 'react-uuid';

const initialStudents ={
    students:[
        {id:uuid(), name:'Sanjid', semester:'12'},
        {id:uuid(), name:'Moshiur', semester:'10'},

    ]
}

export const bookSlice = createSlice({
    name:'students',
    initialState: initialStudents,
    reducers:{
        showStudents: (state)=> state,
        addStudents: (state, action)=>{
            state.students.push(action.payload);
        },
        deleteStudents: (state, action)=>{
            const id = action.payload;
            state.students = state.students.filter(student => student.id != id);
        },
        
        updateStudents: (state, action)=>{
            const {id,name,semester} = action.payload;
           const isStudentExist =  state.students.filter(student => student.id === id)
           if(isStudentExist){
            isStudentExist[0].name = name;
            isStudentExist[0].semester = semester;
           }
        },
    }
})

export const {showStudents, addStudents, deleteStudents, updateStudents} = bookSlice.actions;
export default bookSlice.reducer;