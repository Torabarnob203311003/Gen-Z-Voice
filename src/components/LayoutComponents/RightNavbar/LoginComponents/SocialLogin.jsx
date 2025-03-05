import React from 'react';
import { FaGithub } from "react-icons/fa";

function SocialLogin() {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className=' space-y-3'>
                <button className='btn flex items-center gap-2 py-2 px-4 border-2 border-gray-300 rounded hover:bg-gray-200'>
                    <img src="https://www.pngmart.com/files/16/Google-Logo-PNG-Image.png" alt="Google Logo" className="w-3.7 h-5" />
                    LogIn With Google
                </button>
                <button className='btn flex items-center gap-2 py-2 px-4 border-2 border-gray-300 rounded hover:bg-gray-200'>
                    <FaGithub size="20" className='text-black' />
                    LogIn With GitHub
                </button>
            </div>
        </div>
    );
}

export default SocialLogin;
