import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/Vocab_Bee-removebg-preview.png';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast from "react-hot-toast";
import './cssFile/navBar.css'

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  console.log(user);
  

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.success('Logged out successfully');
      })
      .catch((error) => {
        console.error('Logout error', error);
        toast.error('Logout failed');
      });
  };

  return (
    <div className="navbar max-w-7xl m-auto py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#43b6c83f] rounded-box z-[1] mt-8 w-60 p-2 shadow space-y-8 text-[16px] backdrop-blur-sm">
            <div>
            <NavLink to='/'>Home</NavLink>
            </div>
         <div>
         <NavLink to={user ? '/startLearning' : '/login'}>Start-Learning</NavLink>
         </div>
          <div>
          <NavLink to={user ? '/tutorials' : '/login'}>Tutorials</NavLink>
          </div>
          <div>
          <NavLink to='/aboutUs'>About Us</NavLink>
          </div>
          {
            user && <div>
              <NavLink to='/myProfile'>My Profile</NavLink>
            </div>
          }
          </ul>
        </div>
        <Link to="/">
          <img className='w-28' src={logo} alt="Vocab Bee Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-10 text-[16px]">
          <NavLink to='/'>Home</NavLink>
          <NavLink to={user ? '/startLearning' : '/login'}>Start-Learning</NavLink>
          <NavLink to={user ? '/tutorials' : '/login'}>Tutorials</NavLink>
          <NavLink to='/aboutUs'>About Us</NavLink>
          {
            user && <div>
              <NavLink to='/myProfile'>My Profile</NavLink>
            </div>
          }
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        {user ? (
          <>
            <span className="mr-4 text-lg font-semibold">{user.displayName}</span>
            <button onClick={handleLogout} className="border px-6 py-2 rounded-lg cursor-pointer bg-[#1d1b28] text-white">Logout</button>
          </>
        ) : (
          <Link to='/login' className="border px-6 py-2 rounded-lg cursor-pointer bg-[#1d1b28] text-white">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
