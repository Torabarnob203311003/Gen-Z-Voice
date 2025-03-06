import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Removed incorrect `Links` import
import { FaCircleUser } from "react-icons/fa6";
import { AuthContext } from '../../Provider/AuthProvider';

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <div className='flex justify-between py-5'>
      <div> {user ? user.name : 'Guest'} </div> {/* Added a check for user */}
      <div className="nav space-x-5 items-center">
        <Link to='/'>Home</Link>
        <Link to='/career'>Career</Link> {/* Fixed spelling if it was a typo */}
        <Link to='/about'>About</Link>
      </div>
      <div className='login flex gap-2 items-center'>
        <div>
          <FaCircleUser size='38' />
        </div>
        <Link to='/auth/login' className="bg-black text-gray-200 px-3 py-2 rounded-lg">LogIn</Link>
      </div>
    </div>
  );
}

export default Navbar;
