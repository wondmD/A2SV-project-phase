"use client"

import React, { useState } from 'react'
// import Jobs from './detail/data'
import { LocationMarkerIcon } from '@heroicons/react/solid';
import { EyeIcon } from '@heroicons/react/solid';

import PcNav from './detail/components/PcNav';
import MobileNav from './detail/components/MobileNav'

import {  useEffect } from 'react';

import { jobtype } from './detail/data';
import Link from 'next/link';
import Bookmark from './detail/components/bookmark'
import Jobs from './detail/getdata'
import { title } from "process"




const JobList: React.FC = async  () => {

      const sortedjobs = Jobs
      
      
  

    return (
        <div className='md:w-[60%] md:ml-[20%] md:text-2xl md:mt-20'>


            <MobileNav />
            <div className="  ">
                <div className="">

                    <div>
                        <h1 className='ml-5 font-extrabold text-4xl mt-3 md:text-6xl'>Opportunities </h1>

                    </div>

                    <div className='grid grid-cols-[3fr_2fr] mt-3'>
                        <div className='text-left'>
                            <p className='text-[20px] ml-10 mt-2 font-light'>showing 10 results</p>
                        </div>
                        <div className='text-right flex '>
                            <div className="bg-[#fff] dropdown flex text-right">

                                <select className="text-m  rounded  bg-white border-0 border-r-4  h-10 w-[100px]">

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
                    {(await sortedjobs).map((job: jobtype) => (
                        <li key={job.id} className=''>
                            <p>{job.isBookmarked}</p>

                            <div className="font-thin font-poppins shadow-lg hover:shadow-2xl p-6 m-4 border rounded-[30px] border-solid border-[#eee] md:text-l ">

                                <div className=''>
                                    <div className="grid grid-cols-[1fr_6fr] mb-2 sm:flex border-b-2 shadow-sm border=[#eee] md:border-none md:shadow-none">
                                        <div>
                                            <img
                                                className="m-1 mt-2 w-[50px] md:w-[80px] md:h-[80px] h-[50px] border border-solid border-[#eee] p-1 rounded-[50%]"
                                                src={job.logoUrl ? job.logoUrl : "/images/akil.png"}
                                                alt='Image'
                                            />
                                        </div>
                                        <div className="ml-2">
                                            <Link href={`/jobs/detail/${job.id}`}>

                                                <h1 className="mt-1 mx-2 text-l font-bold md:text-4xl">{job.title}</h1>



                                                <div>
                                                    <div className='flex'>
                                                        <p className='flex flex-row mx-2 font-extralight'>{job.orgName}</p>
                                                        <span className='hidden md:flex' ><span className="mx-2 text-m">•</span>{job.location}  <img className='w-[20px] h-[20px] ml-4' src="/images/stat.png" alt="" /> <span>{job.status}</span></span>
                                                    </div>

                                                </div>

                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex md:hidden'>
                                            <LocationMarkerIcon className="h-4 w-4 m-1 text-blue-500" />
                                            {job.location}  <img className='w-[18px] h-[18px] ml-4 m-1' src="/images/stat.png" alt="" /> <span>{job.status}</span>
                                            <div className="w-[15px] h-[15px] flex flex-row">

                                                <label className="mt-[5px] text-white flex flex-row">
                                                    <input className="ml-2 mr-1 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-[15px] h-[15px]" type="checkbox" />
                                                </label>
                                                <p className='flex'>Bookmark</p>
                                            </div>
                                        </div>

                                        <p className="text-l font-normal">{job.description}</p>
                                        <div className='m-2'>
                                            {job.applicantsCount ? <p className='text-purple-600 font-normal'>{job.applicantsCount} Applicants</p> : <p className='text-green-600 font-normal'>Be the first to apply</p>}
                                        </div>
                                        <div className="flex m-2">
                                            {job.opType == 'inPerson' ? (
                                                <button className="mx-2 border rounded-full btn btn-outline btn-success">{job.opType}</button>
                                            ) : (<button className="mx-2 border rounded-full btn btn-outline btn-warning">{job.opType}</button>)}


                                            <div className='flex m-3'><EyeIcon /> <span className='text-lg'> {job.viewsCount}</span><span className='text-lg mx-3 flex'><img src="/images/rate.png" alt="" /><span className='mx-1'> {job.average_rating}</span></span></div>

                                        </div>
                                    </div>

                                </div>
                                            <Bookmark
                                                id={job.id}
                                                bookmarked={job.isBookmarked}
                                            />
                                            <h1>{job.isBookmarked}here{job.id}</h1>
                                            {job.isBookmarked ? <p>yes</p> : <p>NO</p>}
                                </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div >

    );
};

export default JobList;