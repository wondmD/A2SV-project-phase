'use client'
import React from 'react';

interface DropdownProps {
    onSortChange: (sortOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onSortChange }) => {
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSortChange(event.target.value);
    };

    return (
        <div className="bg-[#fff] dropdown text-right ml-90 pl-80  flex">
          <p className='m-2 mt-4 p-2 text-2xl '>sort by: </p>
            <select onChange={handleSortChange} className="text-xl mt-5 rounded p-2 bg-white border-0 border-r-4 h-10 w-[200px]">
               
                <option value="date">Date</option>
                <option value="alphabet">Alphabetically</option>
            </select>
        </div>
    );
};

export default Dropdown;
