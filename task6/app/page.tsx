'use client'
import React, { useState } from 'react'
import { Jobs } from './detail/data'
import Image from 'next/image';
import Dropdown from './detail/drop';


import { jobtype } from './detail/data';
import Link from 'next/link';

//return on one job based on the url detail/id




const JobList: React.FC = () => {
    const [sortedJobs, setSortedJobs] = useState<jobtype[]>(Jobs);
    const countjobs = [...Jobs].length;
    const handleSortChange = (sortOption: string) => {
        let sortedArray = [...Jobs];
        if (sortOption === 'date') {
            sortedArray.sort((a, b) => new Date(a.about.posted_on).getTime() - new Date(b.about.posted_on).getTime());
        } else if (sortOption === 'alphabet') {
            sortedArray.sort((a, b) => a.title.localeCompare(b.title));
        }
        setSortedJobs(sortedArray);
    };

    return (
        <div className='px-40 '>
          

            <div className=" max-w-[1200px] p-5 m-8 my-10 ">
                <div className="w-1200px flex px-5 mx-7">
                    <h1 className='text-left font-extrabold text-5xl ml-50px'>Opportunities <p className='text-[28px] font-light mt-2 mx-2'>Sowing {countjobs} results</p></h1>
                    <Dropdown onSortChange={handleSortChange} />
                </div>
                <div className=' '>
                <ul>
                    {sortedJobs.map((job: jobtype) => (
                        <li key={job.title}>
                            <div className="">

                                <div className='p-6 m-8 border rounded-[30px] border-solid border-[#ccc]'>
                                    <div className="grid grid-cols-[1fr_6fr] mb-2">
                                        <div>
                                            
                                        
                                            
                                            <Image
                                                className="m-5  border rounded-[50px]"
                                                src={job.image}
                                                alt='Image'
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                        <div className="ml-2">
                                         <Link href={`/detail/${job.id}`}>

                                            <h1 className="mt-5 text-3xl">{job.title}</h1>

                                            <p>{job.company}<span className="mx-2 text-xl">•</span>{job.about.location}</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xl">{job.description}</p>
                                        <div className="m-5">
                                            <button className="mx-2 border rounded-full btn btn-outline btn-success">In Person</button>
                                            <button className="mx-2 border rounded-full btn btn-outline btn-warning">Education</button>
                                            <button className="mx-2 border rounded-full btn btn-outline btn-info">IT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    );
};

export default JobList;
