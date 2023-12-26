import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudents } from "./StudentSlice";
import { useNavigate } from "react-router-dom";
import uuid from 'react-uuid';


const AddStudent = () => {
    const [name, setName] = useState('');
    const [semester, setSemester] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const student = {id:uuid(), name,semester};
        dispatch(addStudents(student));
        navigate("/show", {replace:true})
    }
    return (
        <div className="flex justify-center items-center flex-col">
            <h2 className="mb-8 font-bold text-2xl">Add Student</h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                    <label htmlFor="name" className="">Name</label>
                    <input 
                    type="text" 
                    id='name'
                    name="name"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    placeholder="Enter Student Name" 
                    className="input input-bordered input-accent w-full max-w-xs" 
                    required
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="semester" className="">Class</label>
                    <input 
                    type="text" 
                    id='semester'
                    name="semester"
                    value={semester}
                    onChange={(e)=>{setSemester(e.target.value)}}
                    placeholder="Enter Student Name" 
                    className="input input-bordered input-accent w-full max-w-xs" 
                    required
                    />
                </div>
                <button type="submit flex justify-center" className=" text-white btn btn-active btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddStudent;