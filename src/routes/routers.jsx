import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '../components/Layouts/HomeLayout';

const router = createBrowserRouter(
    [

        {
                path : '/',
                element : <HomeLayout/>

        },
        {
                path : '/news',
                element : <h1>nes updated</h1>

        },
        {
                path : '/auth',
                element : <h1>auth here</h1>

        },
        {
                path :'*',
                element : <h1>error</h1>

        },

    ]
)
export default router;