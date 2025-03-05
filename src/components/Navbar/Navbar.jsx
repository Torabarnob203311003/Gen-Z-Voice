import React from 'react'
import { Link } from 'react-router-dom'
import { FaCircleUser } from "react-icons/fa6";


function Navbar() {
  return (
    <div className='flex justify-between py-5'>
             <div> </div>
             <div className="nav space-x-5 items-center">
                <Link to='/'>Home</Link>
                <Link to='/carrier'>Carrier</Link>
                <Link to='/about'>About</Link>

             </div>
          <div className=' login flex gap-2 items-center'>
                    <div>
                  <FaCircleUser   size='45'/>
             
                    </div>
              <button className=" bg-black text-gray-200 px-3 py-3 rounded-lg">LogIn</button>

             </div>


    </div>
  )
}

export default Navbar