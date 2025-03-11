import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

function LogIn() {
    const { signInUser, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate(); // Get location object

    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        console.log(email, password);

        // Call signInUser function from context
        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);

                // Navigate to the desired location or fallback to home page
                const from = location.state?.from || "/"; // Get the previous page or fallback to home
                navigate(from); // Redirect to the previous page or home page

                console.log("User logged in:", user);
                e.target.reset(); // Reset the form after successful login
            })
            .catch((error) => {
                console.error("Error logging in:", error.message);
                e.target.reset();
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-start bg-gray-100 px-7 py-44">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white p-6 sm:p-8 shadow-lg rounded-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
                    Login Your Account
                </h2>

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none text-sm sm:text-base"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none text-sm sm:text-base"
                            placeholder="Enter your password"
                            required
                        />
                        {/* Forgot Password link */}
                        <p className="text-center text-gray-400 mt-2 text-xs sm:text-sm">
                            <Link to="/forgot-password" className="hover:underline">
                                Forgot Password?
                            </Link>
                        </p>
                    </div>

                    <button type="submit" className="w-full bg-[#4d4b4b] text-white font-bold py-2 rounded-lg hover:bg-[#403F3F] transition text-sm sm:text-base">
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4 text-xs sm:text-sm">
                    Don't have an account?{' '}
                    <Link to='/auth/register' className="text-[#9d0d0d] hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LogIn;
