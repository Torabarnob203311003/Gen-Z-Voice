import React from 'react';
import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <div className="min-h-screen flex justify-center items-start bg-gray-100 px-7 py-44"> {/* Added py-10 for some space at the top */}
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white p-6 sm:p-8 shadow-lg rounded-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
                    Login Your Account
                </h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none text-sm sm:text-base"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none text-sm sm:text-base"
                        placeholder="Enter your password"
                    />
                    {/* Forgot Password link */}
                    <p className="text-center text-gray-400 mt-2 text-xs sm:text-sm">
                        <Link to="/forgot-password" className="hover:underline">
                            Forgot Password?
                        </Link>
                    </p>
                </div>

                <button className="w-full bg-[#4d4b4b] text-white font-bold py-2 rounded-lg hover:bg-text-[#403F3F] transition text-sm sm:text-base">
                    Login
                </button>

                <p className="text-center text-gray-600 mt-4 text-xs sm:text-sm">
                    Don't have an account? <Link to='/auth/register' className="text-[#9d0d0d] hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
}

export default LogIn;
