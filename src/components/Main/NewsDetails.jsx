import React, { useState, useEffect, useContext } from 'react';
import { Link, useRouteLoaderData, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from '../../routes/Loader/loading';
import Header from '../Header';
import RightBar from '../LayoutComponents/RightNavbar/RightBar';

function NewsDetails() {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    console.log(location)
    const { user } = useContext(AuthContext); // Check if the user is logged in
    const data = useRouteLoaderData('news-detail');
    const navigate = useNavigate();  // Hook to handle navigation

    useEffect(() => {
        if (data) {
            setIsLoading(false);
        }
    }, [data]);

    // Navigate back to the previous page
    const handleBackToCategory = () => {
        navigate(-1);  // This takes the user back to the previous page in the browser's history stack
    };

    // Handle the "Read More" click
    const handleReadMore = () => {
        if (!user) {
            navigate('/auth/login');  // Redirect to login if user is not logged in
        } else {
            navigate('/news-details'); // If logged in, stay on the NewsDetails page
        }
    };

    if (isLoading) {
        return <Loading></Loading>; // Show loading spinner while data is being loaded
    }

    return (
        <div>
            <header>
                <Header />
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 px-4 py-6'>
                {/* Categories Section */}
                <section className='col-span-12 mb-6'>
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <div className="flex space-x-4">
                        <Link
                            to="/category/breaking-news"
                            className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Breaking News
                        </Link>
                    </div>
                </section>

                {/* Main News Section */}
                <section className='col-span-12 md:col-span-9'>
                    <h2 className='font-semibold text-xl mb-5'>Your News</h2>

                    <div className="card bg-base-100 shadow-lg p-5">
                        <figure className="px-5 pt-5">
                            <img
                                src={data?.image_url}
                                alt={data?.title}
                                className="rounded-xl w-full"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold mb-3">{data?.title}</h2>
                            <p className="text-gray-600 mb-3">Published on: {data?.published_date}</p>
                            <p className="text-lg mb-4">{data?.details}</p>
                            <div className="card-actions mt-4">
                                <button
                                    onClick={handleReadMore}  // Call handleReadMore function
                                    className="btn bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    Read More
                                </button>
                                <button
                                    onClick={handleBackToCategory}  // Call the function on click
                                    className="btn bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    Back To Previous Page
                                </button>
                            </div>

                            <div className="mt-4 space-y-2">
                                <p className="text-sm text-gray-500">Total Views: {data?.total_view}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sidebar */}
                <aside className='col-span-12 md:col-span-3'>
                    <RightBar />
                </aside>
            </main>
        </div>
    );
}

export default NewsDetails;
