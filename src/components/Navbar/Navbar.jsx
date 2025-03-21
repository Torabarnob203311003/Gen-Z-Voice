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
    <div className="flex flex-wrap justify-between items-center py-5 px-4">
      <div className="text-xl font-bold flex-1 md:flex-none">
        {user && user.email ? user.email : 'Guest'}
      </div>
      <div className="nav space-x-5 items-center flex-1 md:flex-none md:flex justify-center md:justify-end">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center flex-1 md:flex-none justify-center md:justify-end">
        <div>
          {user && user.photoURL ? (
            <img
              src={user.photoURL}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-gray-300"
            />
          ) : (
            <FaCircleUser size="38" />
          )}
        </div>
        {user && user.email ? (
          <button onClick={handleLogOut} className="bg-black text-gray-200 px-3 py-2 rounded-lg">
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="bg-black text-gray-200 px-3 py-2 rounded-lg">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
