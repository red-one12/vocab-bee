import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/Vocab_Bee-removebg-preview.png'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const {user} = useContext(AuthContext);

  console.log(user);
  
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-6 text-[16px]">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/startLearning'>Start-Learning</NavLink>
      <NavLink to='/tutorials'>Tutorials</NavLink>
      <NavLink to='/about'>About Us</NavLink>
      </ul>
    </div>
    <Link>
      <img className='w-28' src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-10 text-[16px]">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/startLearning'>Start-Learning</NavLink>
      <NavLink to='/tutorials'>Tutorials</NavLink>
      <NavLink to='/about'>About Us</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <p>{user && user.name}</p>
    <Link to='/login' className="border px-6 py-2 rounded-lg cursor-pointer bg-[#1d1b28] text-white">Login</Link>
  </div>
</div>
  );
};

export default Navbar;