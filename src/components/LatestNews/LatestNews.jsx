import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

function LatestNews() {
    return (
        <div className="flex justify-center items-center w-full px-4 ">
            <div className="  flex flex-col sm:flex-row items-center gap-0.5 p-4 rounded-lg max-w-6xl w-full ">
                <p className="text-xl bg-[#D72850] text-white px-4 py-2 rounded-base ">Latest</p>

                <Marquee pauseOnHover
                    className="w-full bg-gray-100 px-4 py-2"
                    speed={50}
                    pauseOnHover={true}
                >
                    <div className="flex gap-10 text-xl font-medium">
                        <Link to="/news" className="transition duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                        <Link to="/news" className="transition duration-300">Quibusdam non delectus accusantium architecto minus perspiciatis ex.</Link>
                        <Link to="/news" className="transition duration-300">Dignissimos omnis accusantium quas! Lorem ipsum dolor sit amet.</Link>
                        <Link to="/news" className="transition duration-300">Non delectus accusantium architecto minus perspiciatis ex.</Link>
                    </div>
                </Marquee>


            </div>
        </div>
    );
}

export default LatestNews;
