import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Catagories as categoriesData } from '../../Data/Catagories'; // Renaming imported data

function LeftBar() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(categoriesData);
    }, []);

    return (
        <div className='ps-16'>
            <h2 className='font-semibold'>All Categories ({categories.length})</h2>
            <div className='flex flex-col gap-1 mt-3'>
                {categories.map(({ id, name }) => ( // Destructuring inside map
                    <NavLink
                        to={`/categories/${id}`} // Use category id here to create a dynamic URL
                        key={id}
                        className={({ isActive }) =>
                            `w-full sm:w-2/5 md:w-1/4 lg:w-3/5 xl:w-2/3 px-2 py-3 text-sm rounded transition text-center 
                            ${isActive ? 'bg-blue-700 text-white' : 'bg-gray-100 text-black'} 
                            hover:bg-blue-600 hover:text-white`
                        }
                    >
                        {name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default LeftBar;
