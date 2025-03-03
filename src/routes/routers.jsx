import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter(
    [

        {
                path : '/',
                element : <h1>home</h1>

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