import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { AuthContext } from '../../Provider/AuthProvider';

function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  // Handle logout functionality
  const handleLogOut = () => {
    logOut()

      .catch((error) => {
        console.error("Error logging out:", error.message);
        alert("Failed to log out!");
      });
  };

  return (
    <div className='flex justify-between py-5 items-center px-4'>
      <div className='text-xl font-bold'>
        {user && user.email ? user.email : 'Guest'}
      </div>
      <div className="nav space-x-5 items-center">
        <Link to='/'>Home</Link>
        <Link to='/career'>Career</Link>
        <Link to='/about'>About</Link>
      </div>
      <div className='login flex gap-2 items-center'>
        <div>
          <FaCircleUser size='38' />
        </div>
        {user && user.email ? (
          <button onClick={handleLogOut} className="bg-black text-gray-200 px-3 py-2 rounded-lg">
            Log Out
          </button>
        ) : (
          <Link to='/auth/login' className="bg-black text-gray-200 px-3 py-2 rounded-lg">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
