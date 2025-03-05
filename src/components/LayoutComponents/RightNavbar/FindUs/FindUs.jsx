import React from 'react';

function FindUs() {
    return (
        <div className="">
            <h2 className='font-semibold mt-3 text-left'>Find Us On</h2>

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 mt-5">
                {/* Button for Facebook */}
                <button className="btn w-full sm:w-auto text-black rounded-lg py-2 px-4 hover:bg-gray-200 transition flex items-center justify-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-6 h-6" />
                    Facebook
                </button>

                {/* Button for Twitter */}
                <button className="btn w-full sm:w-auto text-black rounded-lg py-2 px-4 hover:bg-gray-200 transition flex items-center justify-center gap-2">
                    <img src="https://th.bing.com/th/id/R.b757f2bca8039d4a08882d38f4c1b8f0?rik=l1HvTt1fIsaMmQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ftwitter-logo-png-logo-twitter-in-png-2500.png&ehk=qSLAOlUdmImpXk6Jj6NUgKgK5gv%2fq1TGUwvlzdeBiNA%3d&risl=&pid=ImgRaw&r=0" alt="Twitter" className="w-6 h-6" />
                    Twitter
                </button>

                {/* Button for LinkedIn */}
                <button className="btn w-full sm:w-auto text-black rounded-lg py-2 px-4 hover:bg-gray-200 transition flex items-center justify-center gap-2">
                    <img src="https://th.bing.com/th/id/OIP.NN_29U5mI6l_KAfhsxQksgHaHa?rs=1&pid=ImgDetMain" alt="LinkedIn" className="w-6 h-6" />
                    LinkedIn
                </button>
            </div>
        </div>
    );
}

export default FindUs;
