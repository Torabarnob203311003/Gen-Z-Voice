import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Auth from '../components/Auth/Auth';
import LogIn from '../components/Auth/LogInAuth/LogIn';
import Register from '../components/Auth/RegisterAuth/Register';

import HomeLayout from '../components/Layouts/HomeLayout';
import News from '../components/Main/News';

const router = createBrowserRouter([
        {
                path: '/',
                element: <HomeLayout />,
                children: [
                        {
                                path: '/', // Default path
                                element: <Navigate to="/categories/1" />, // Redirect to /categories/0
                        },
                        {
                                path: '/categories/:id',  // Keep the same path
                                element: <News />,

                                // Log to verify




                        },
                ],
        },
        {
                path: '/news',
                element: <h1>News updated</h1>,
        },
        {
                path: '/auth',
                element: <Auth></Auth>,
                children: [
                        {
                                path: '/auth/login', // Correct path for login
                                element: <LogIn />
                        },
                        {
                                path: '/auth/register', // Correct path for register
                                element: <Register />
                        }
                ]
        },

        {
                path: '*',
                element: <h1>Page not found</h1>,
        },
]);

export default router;
