// components/BookmarkedOpportunities.tsx
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { useBookmarkedOpportunities } from "./bookdata";
import { useGetBoookmarksQuery } from "@/lib/service/jobsService";
import { useSession } from "next-auth/react";
import Button from "@/app/components/Button";
import Bookmark from "./bookmark";
import axios from "axios";
import BookmarkSkeleton from "./bookskeleton";

const BookmarkedOpportunities: React.FC = () => {
  // const { bookmarkedOpportunities, error } = useBookmarkedOpportunities();

  const { data: session, status } = useSession();
  const [isLoadingbook, setisLoadingbook] = useState(false)
  const token = session?.user.data.accessToken!;
  const {
    data: BookmarkedOpp,
    isLoading,
    isError,
  } = useGetBoookmarksQuery(token);
  let bookmarkedOpportunities = BookmarkedOpp?.data;
 
  
  
  // console.log()
 
  const handleDeleteBookmarked = (jobid: string) => {
    setisLoadingbook(true);
    console.log("Deleting bookmark for job ID:", jobid);
    axios.delete(
      `https://akil-backend.onrender.com/bookmarks/${jobid}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.data?.accessToken}`,
        },
      }
    ).catch(error => {
      console.error("Error deleting bookmark:", error);
    });
    const filteredOpportunities = bookmarkedOpportunities.filter(
      (job : any) => job.eventId !== jobid
    )
    
    bookmarkedOpportunities = filteredOpportunities   
    setisLoadingbook(false); 
  };
  if (isLoading) {
    return (
      <div className="">
      
        <BookmarkSkeleton />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="text-center">
        <h1>Error fetching bookmarked opportunities</h1>
      </div>
    );
  }

  return (
    <div className="w-[90%] ml-[5%] md:w-[60%] md:ml-[20%] text-black">
      <h1 className="text-2xl m-3 md:text-5xl font-extrabold">Bookmarked Opportunities</h1>
      {isError ? (
        <p>Error: {isError}</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {bookmarkedOpportunities.map((job: any) => (
            <li
              key={job.eventID}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <img
                    className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] border border-solid border-[#eee] p-2 rounded-full"
                    src={job.logoUrl}
                    alt="Company Logo"
                  />
                  <div className="ml-4">
                    <Link href={`/jobs/detail/${job.eventID}`}>
                      <h1 className="text-xl font-semibold text-gray-800">
                        {job.title}
                      </h1>
                      <p className="text-sm text-gray-500">{job.orgName}</p>
                      <div className="mt-1 flex items-center text-gray-500 text-sm">
                        <LocationMarkerIcon className="h-5 w-5 text-blue-500" />
                        <span className="ml-1">{job.location}</span>
                        <span className="mx-2">•</span>
                        <span>{job.opType}</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-green-600 mb-4">
                  Be the first to apply
                </p>
                <div className="flex justify-between items-center">
                  {job.opType === "inPerson" ? (
                    <button className="px-4 py-2 text-xs font-medium text-green-600 bg-green-100 border border-green-600 rounded-full">
                      {job.opType}
                    </button>
                  ) : (
                    <button className="px-4 py-2 text-xs font-medium text-orange-600 bg-orange-100 border border-orange-600 rounded-full">
                      {job.opType}
                    </button>
                  )}
                {isLoadingbook ? <p>loading...</p> : (
                    <button
                    onClick={() => handleDeleteBookmarked(job.eventID)}
                    >
                      <p className="text-red-600">Remove</p>
                    </button>
                )}
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
