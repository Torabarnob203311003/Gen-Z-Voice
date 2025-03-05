import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../components/Layouts/HomeLayout';
import News from '../components/Main/News';

const router = createBrowserRouter([
        {
                path: '/',
                element: <HomeLayout />,
                children: [
                        {
                                path: '/', // Default path
                                element: <Navigate to="/categories/0" />, // Redirect to /categories/0
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
                element: <h1>Authentication page</h1>,
        },
        {
                path: '*',
                element: <h1>Page not found</h1>,
        },
]);

export default router;
