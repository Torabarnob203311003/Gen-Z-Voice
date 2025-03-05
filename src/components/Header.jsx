import moment from 'moment';
import React from 'react';
import logo from "../assets/logo.png";



function Header() {
    return (
        <div className='mt-5 flex flex-col justify-center items-center gap-2 py-2'>
            <div className="logo flex flex-col items-center">
                <img className="w-[500px] border" src={logo} alt="Logo" />
                <h2 className='text-gray-400 text-center mt-2 '>Journalism Without Fear or Favour</h2>
                <p className=' text-gray-400'> 
                    {moment().format("dddd, MMMM Do YYYY")}

                </p>
            </div>
        </div>
    )
}

export default Header;
