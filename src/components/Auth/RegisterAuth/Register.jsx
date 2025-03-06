import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = formData;
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        // Handle the form submission logic, like sending data to a server
        console.log("Form submitted", formData);
    };

    return (
        <div className="min-h-screen flex justify-center items-start bg-gray-100 px-7 py-44">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white p-6 sm:p-8 shadow-lg rounded-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
                    Create Your Account
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none text-sm sm:text-base"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none text-sm sm:text-base"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none text-sm sm:text-base"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none text-sm sm:text-base"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    <button type="submit" className="w-full bg-[#4d4b4b] text-white font-bold py-2 rounded-lg hover:bg-text-[#403F3F] transition text-sm sm:text-base">
                        Register
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4 text-xs sm:text-sm">
                    Already have an account? <Link to="/auth/login" className="text-[#9d0d0d] hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
