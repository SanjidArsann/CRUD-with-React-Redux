import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <button className="font-bold text-white  text-xl">CRUD</button>
        <Link to="/" className="btn btn-ghost text-xl">Home</Link>
        <Link to="/show" className="btn btn-ghost text-xl">Show Student</Link>
        <Link to="/add" className="btn btn-ghost text-xl">Add Student</Link>
      </div>
    </div>
  );
};

export default Header;
