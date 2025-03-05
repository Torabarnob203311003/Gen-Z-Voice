import React, { useEffect, useState } from 'react';
import { Catagories as categoriesData } from '../../assets/Data/Catagories'; // Renaming imported data

function LeftBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return (
    <div>
      <h2 className='font-semibold'> All Categories ({categories.length})</h2>
      <div className='flex flex-col gap-1 mt-3'>
        {categories.map(({ id, name }) => ( // Destructuring inside map
          <button
            key={id}
            className='w-2/5 px-2 py-1 text-black text-sm bg-gray-100 rounded hover:bg-blue-700 transition text-center'
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LeftBar;
