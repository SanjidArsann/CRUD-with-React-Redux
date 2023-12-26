import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateStudents } from './StudentSlice';

const EditStudent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [id, setId] = useState(location.state.id);
    const [name, setName] = useState(location.state.name);
    const [semester, setSemester] = useState(location.state.semester);
    const dispatch = useDispatch();

    const handleSubmit =(e)=>{
        e.preventDefault();
        {id,name,semester}
        dispatch(updateStudents({id,name,semester}));
        navigate('/show', {replace:true});
    }
    return (
        <div className="flex justify-center items-center flex-col">
            <h2 className='mb-8 font-bold text-2xl'>Edit Student</h2>
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
                <button type="submit flex justify-center" className=" text-white btn btn-active btn-primary">Update</button>
            </form>
        </div>
    );
};

export default EditStudent;