import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function Auth() {
    return (
        <div className='font-poppins bg-[#f3f3f3]'>

            <header className=' py-3 w-11/12 mx-auto'>
                <Navbar></Navbar>


            </header>

            <Outlet></Outlet>
        </div>
    )
}

export default Auth