// 'use client'
import React, { useState } from 'react'
import Jobs  from './detail/data'
import Image from 'next/image';
import Dropdown from './detail/drop';


import { jobtype } from './detail/data';
import Link from 'next/link';

const JobList: React.FC = async () => {
    // const [sortedJobs, setSortedJobs] = useState<jobtype[]>(await Jobs);
    // const countjobs =   [...await Jobs].length;
    // const handleSortChange = async (sortOption: string) => {
    //     let sortedArray = [...await Jobs];
    //     if (sortOption === 'date') {
    //         sortedArray.sort((a, b) => new Date(a.datePosted).getTime() - new Date(b.datePosted).getTime());
    //     } else if (sortOption === 'alphabet') {
    //         sortedArray.sort((a, b) => a.title.localeCompare(b.title));
    //     }
    //     setSortedJobs(sortedArray);
    // };
    const sortedJobs = await Jobs   

    return (
        <div className='px-40 '>
          

            <div className=" max-w-[1200px] p-5 m-8 my-10 ">
                <div className="w-1200px flex px-5 mx-7">
                    <h1 className='text-left font-extrabold text-5xl ml-50px'>Opportunities <p className='text-[28px] font-light mt-2 mx-2'>Showing {sortedJobs.length} results</p></h1>
                    {/* <Dropdown onSortChange={handleSortChange} /> */}
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
                                                className="m-5"
                                                src="/images/akil.png"
                                                alt='Image'
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                        <div className="ml-2">
                                         <Link href={`/detail/${job.id}`}>

                                            <h1 className="mt-5 text-3xl">{job.title}</h1>

                                            <p>{job.orgName}<span className="mx-2 text-xl">•</span>{job.location}</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xl">{job.description}</p>
                                        <div className="m-5">
                                            {job.opType == 'inPerson' ?  (
                                                <button className="mx-2 border rounded-full btn btn-outline btn-success">{job.opType}</button>
                                            ): (<button className="mx-2 border rounded-full btn btn-outline btn-warning">{job.opType}</button>)}

                                            <button>{job.viewsCount}</button>
                                            
                                
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
