import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Auth from '../components/Auth/Auth';
import LogIn from '../components/Auth/LogInAuth/LogIn';
import Register from '../components/Auth/RegisterAuth/Register';

import HomeLayout from '../components/Layouts/HomeLayout';
import News from '../components/Main/News';
import NewsDetails from '../components/Main/NewsDetails';

const router = createBrowserRouter([
        {
                path: '/',
                element: <HomeLayout />,
                children: [
                        {
                                path: '/', // Default path
                                element: <Navigate to="/categories/1" />, // Redirect to /categories/1
                        },
                        {
                                path: '/categories/:id',
                                element: <News />,
                        },
                ],
        },
        {
                path: '/news/:id',
                element: <NewsDetails />,
                loader: async ({ params }) => {
                        try {
                                const response = await fetch(`https://openapi.programming-hero.com/api/news/${params.id}`);
                                if (!response.ok) {
                                        throw new Error('Failed to fetch news details');
                                }
                                const data = await response.json();
                                return data.data[0]; // Return the first news object from the API response
                        } catch (error) {
                                console.error('Error loading news details:', error);
                                return { error: 'Unable to load news details' };
                        }
                },
                id: 'news-detail', // Assign a loader ID
        },
        ,
        {
                path: '/auth',
                element: <Auth />,
                children: [
                        {
                                path: 'login',
                                element: <LogIn />,
                        },
                        {
                                path: 'register',
                                element: <Register />,
                        },
                ],
        },
        {
                path: '*',
                element: <h1>Page not found</h1>,
        },
]);

export default router;
