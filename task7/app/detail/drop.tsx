// 'use client'
import React from 'react';
import { useState } from 'react'
import { jobtype } from './data';
import Jobs from './data';

interface DropdownProps {
    onSortChange: (sortOption: string) => void;
}
export const [sortedJobs, setSortedJobs] = useState<jobtype[]>(await Jobs);
export const countjobs =   [...await Jobs].length;
export const handleSortChange = async (sortOption: string) => {
    let sortedArray = [...await Jobs];
    if (sortOption === 'date') {
        sortedArray.sort((a, b) => new Date(a.datePosted).getTime() - new Date(b.datePosted).getTime());
    } else if (sortOption === 'alphabet') {
        sortedArray.sort((a, b) => a.title.localeCompare(b.title));
    }
    setSortedJobs(sortedArray);
};



const Dropdown: React.FC<DropdownProps> = ({ onSortChange }) => {
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSortChange(event.target.value);
    };

    return (
        <div className="bg-[#fff] dropdown text-right ml-90 pl-80  flex">
          <p className='m-2 mt-4 p-2 text-2xl '>sort by: </p>
            <select className="text-xl mt-5 rounded p-2 bg-white border-0 border-r-4 h-10 w-[200px]">
               
                <option value="date">Date</option>
                <option value="alphabet">Alphabetically</option>
            </select>
        </div>
    );
};

export default Dropdown;
