// components/BookmarkedOpportunities.tsx
/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import Link from 'next/link';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import { useBookmarkedOpportunities } from './bookdata';

const BookmarkedOpportunities: React.FC = () => {
  const { bookmarkedOpportunities, error } = useBookmarkedOpportunities();

  return (
    <div className='w-[60%] ml-[20%] text-black'>
      <h1 className='text-5xl font-extrabold'>Bookmarked Opportunities</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {bookmarkedOpportunities.map((job) => (
            <li key={job.eventID} className="">
              <div className="font-thin font-poppins shadow-lg hover:shadow-2xl p-6 m-4 border rounded-[30px] border-solid border-[#eee] md:text-l">
                <div className="">
                  <div className="mb-2 sm:flex border-b-2 shadow-sm border-[#eee] md:border-none md:shadow-none">
                    <div>
                      <img
                        className="m-1 mt-2 w-[50px] md:w-[80px] md:h-[80px] h-[50px] border border-solid border-[#eee] p-1 rounded-[50%]"
                        src={job.logoUrl}
                        alt="Image"
                      />
                    </div>
                    <div className="ml-2">
                      <Link href={`/jobs/detail/${job.eventID}`}>
                        <h1 className="mt-1 mx-2 text-l font-bold">
                          {job.title}
                        </h1>
                        <div>
                          <div className="flex">
                            <p className="flex flex-row mx-2 font-extralight">
                              {job.orgName}
                            </p>
                            <span className="hidden md:flex">
                              <span className="mx-2 text-m">•</span>
                              {job.location}{" "}
                              <img
                                className="w-[20px] h-[20px] ml-4 mt-2"
                                src="/images/stat.png"
                                alt=""
                              />{" "}
                              <span>{job.opType}</span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="flex md:hidden">
                      <LocationMarkerIcon className="h-4 w-4 m-1 text-blue-500" />
                      {job.location}{" "}
                      <img
                        className="w-[18px] h-[18px] ml-4 m-1"
                        src="/images/stat.png"
                        alt=""
                      />{" "}
                      <span>{job.opType}</span>
                      <div className="w-[15px] h-[15px] flex flex-row">
                        <label className="mt-[5px] text-white flex flex-row">
                          <input
                            className="ml-2 mr-1 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-[15px] h-[15px]"
                            type="checkbox"
                          />
                        </label>
                        <p className="flex">Bookmark</p>
                      </div>
                    </div>
                    <div className="m-2">
                      <p className="text-green-600 font-normal">
                        Be the first to apply
                      </p>
                    </div>
                    <div className="flex m-2">
                      {job.opType == "inPerson" ? (
                        <button className="mx-2 border rounded-full btn btn-outline btn-success">
                          {job.opType}
                        </button>
                      ) : (
                        <button className="mx-2 border rounded-full btn btn-outline btn-warning">
                          {job.opType}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookmarkedOpportunities;
