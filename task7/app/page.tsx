import React, { useState } from 'react'
import Jobs from './detail/data'



import { jobtype } from './detail/data';
import Link from 'next/link';


const EyeIcon: React.FC = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-2 text-gray-500 hover:text-gray-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M1.5 12c0-1.5 3.5-9 10.5-9S22.5 10.5 22.5 12s-3.5 9-10.5 9S1.5 13.5 1.5 12zM12 5c-3.5 0-6.5 4.5-6.5 7s3 7 6.5 7 6.5-4.5 6.5-7-3-7-6.5-7zM12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        </svg>
    );
};

const JobList: React.FC = () => {

    
    return (
        <div className=''>


            <div className="  ">
                <div className="">

                    <div>
                        <h1 className='ml-5 font-extrabold text-4xl mt-3 '>Opportunities </h1>

                    </div>

                    <div>
                        <div>
                            <p className='text-[18px] ml-5 mt-5 font-light'>Showing 10 results</p>
                        </div>
                        <div>
                            <div className="bg-[#fff] dropdown text-right ml-90 pl-80  flex">
                                <p className='m-2 mt-4 p-2 text-2xl '>sort by: </p>
                                <select className="text-xl mt-5 rounded p-2 bg-white border-0 border-r-4 h-10 w-[200px]">

                                    <option value="date">Date</option>
                                    <option value="alphabet">Alphabetically</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </div>
            </div>




            <div className=' '>
                <ul>
                    {sortedJobs.map((job: jobtype) => (
                        <li key={job.title} className=''>
                            <div className="font-thin font-poppins shadow-lg hover:shadow-2xl p-6 m-8 border rounded-[30px] border-solid border-[#eee] sm:text-[#f00]">

                                <div className=''>
                                    <div className="grid grid-cols-[1fr_6fr] mb-2 sm:flex">
                                        <div>
                                            <img
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

                                                <p className='flex'>{job.orgName}<span className="mx-2 text-xl">•</span>{job.location} <img className='w-[20px] h-[20px] ml-4' src="/images/stat.png" alt="" /> <span>{job.status}</span> </p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xl">{job.description}</p>
                                        <div className="flex m-5">
                                            {job.opType == 'inPerson' ? (
                                                <button className="mx-2 border rounded-full btn btn-outline btn-success">{job.opType}</button>
                                            ) : (<button className="mx-2 border rounded-full btn btn-outline btn-warning">{job.opType}</button>)}


                                            <div className='flex m-3'><EyeIcon /> <span className='text-lg'> {job.viewsCount}</span><span className='text-lg mx-3 flex'><img src="/images/rate.png" alt="" /><span className='mx-1'> {job.average_rating}</span></span></div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div >

    );
};

export default JobList;