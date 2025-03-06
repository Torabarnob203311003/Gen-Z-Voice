import moment from 'moment';
import React from 'react';
import { FaFistRaised } from "react-icons/fa";  // Punch icon

function Header() {
    return (
        <div className='mt-5 flex flex-col justify-center items-center gap-2 py-2'>
            {/* Logo with Red and Green Theme */}
            <div className="font-extralight flex items-center gap-2">
                <FaFistRaised className="text-red-600 text-3xl" />
                <h2 className='text-3xl font-extrabold text-green-600 uppercase drop-shadow-lg'>
                    Gen-Z Voice
                </h2>
                <FaFistRaised className="text-red-600 text-3xl" />
            </div>

            {/* Tagline */}
            <h2 className='text-gray-500 text-center mt-2 italic'>
                Journalism Without Fear or Favour
            </h2>

            {/* Date */}
            <p className='text-gray-500 mt-1 text-sm'>
                {moment().format("dddd, MMMM Do YYYY")}
            </p>
        </div>
    );
}

export default Header;
