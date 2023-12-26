import { useDispatch, useSelector } from "react-redux";
import { deleteStudents } from "./StudentSlice";
import { Link } from "react-router-dom";

const ViewStudent = () => {
  const students = useSelector((state) => state.studentReducer.students);
  
const dispatch = useDispatch()
 const handleDelete = (id) =>{
  dispatch(deleteStudents(id));
 } 

  return (
    <div>
      <h2 className="text-center font-bold text-3xl mb-16">View Student</h2>
      <div className="mx-36 ">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                {/* <th>Id</th> */}
                <th>Name</th>
                <th>Class</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students &&
                students.map((student) => {
                  const { id, name, semester } = student;
                  return <tr key={id}>
                    {/* <td>{id}</td> */}
                    <td>{name}</td>
                    <td>{semester}</td>
                    <td>
                    <Link to='/edit' state={{id,name,semester}}>
                    <button className="mr-4 btn-success btn btn-sm">Edit</button>
                    </Link>
                    <button onClick={()=>{handleDelete(id)}} className="bg-red btn btn-error btn-sm">Delete</button>
                    </td>
                  </tr>
                  
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewStudent;
