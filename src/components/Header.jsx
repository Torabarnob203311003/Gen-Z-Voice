

import React from 'react';
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className=' mt-5 flex flex-col justify-center items-center gap-2 border-none'>
        <div className="logo">
              <img className="w-[500px] border " src={logo} alt="Logo" />

        </div>
    </div>
  )
}

export default Header