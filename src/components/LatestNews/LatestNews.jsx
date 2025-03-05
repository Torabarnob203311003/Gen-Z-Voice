import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

function LatestNews() {
    return (
        <div className="flex justify-center items-center w-full px-4">
            <div className="flex flex-col sm:flex-row items-center gap-0.5 p-4 rounded-lg max-w-6xl w-full">
                <p className="text-xl bg-[#D72850] text-white px-4 py-2 rounded-base">Latest</p>

                <Marquee pauseOnHover={true} className="w-full bg-gray-100 px-4 py-2" speed={120}>
                    <div className="flex gap-10 text-xl font-medium">
                        <Link to="/news" className="transition duration-300">
                            <span className="text-red-600">রাজপথ</span>, না <span className="text-green-600">দালালি</span>?
                        </Link>
                        <Link to="/news" className="transition duration-300">
                            <span className="text-red-600">আপোষ</span>, না <span className="text-green-600">সংগ্রাম</span>?
                        </Link>
                        <Link to="/news" className="transition duration-300">
                            <span className="text-red-600">তুমি কে</span>? <span className="text-green-600">আমি কে</span>?
                        </Link>
                        <Link to="/news" className="transition duration-300">
                            আসছে <span className="text-red-600">ফাগুন</span>,
                            আমি হবো <span className="text-green-600">দ্বিগুণ</span>
                        </Link>
                    </div>
                </Marquee>
            </div>
        </div>
    );
}

export default LatestNews;
