/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import jobtype from "./components/dataInterface";

import Loading from "../auth/components/loading";
import JobCard from "./components/jobcard";
import { useSession } from "next-auth/react";
import Provider from "../Provider";
import { useRouter } from "next/navigation";
import { useGetAllJobsQuery } from "@/lib/service/jobsService";
import StoreProvider from "../StoreProvider";
import JobCardSkeleton from "./Skeletons/JobCardSkeleton";
import Header from "./components/header";

function sortJobs(jobs: jobtype[], sortBy: string): jobtype[] {
  if (sortBy === "date") {
    return jobs.sort((a, b) => {
      const dateA = new Date(a.datePosted);
      const dateB = new Date(b.datePosted);
      return dateB.getTime() - dateA.getTime();
    });
  } else if (sortBy === "alphabet") {
    return jobs.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    return jobs;
  }
}






const JobList: React.FC = () => {
  
  const {data: session, status} = useSession()
  const token = session?.user.data.accessToken!
  console.log(token)
  const {data: jobs, isLoading, isError} = useGetAllJobsQuery(token)
  console.log(isLoading,isError)
  const router = useRouter();

 
  
  // const [sortedJobs, setSortedJobs] = useState<jobtype[]>(jobs.data);
  // useEffect(() => {
  //   setSortedJobs(jobs);
  // }, [jobs]);

  

  const handleClick = () => {
    router.push('/jobs/bookmarks')
  };
  if (isError) {
    return (
      <div>
       no
      </div>
    ) 
  }
  if(isLoading){
    return(
      <div className="md:w-[60%] md:ml-[20%] md:text-2xl  text-black bg-white">
        <Header handleClick={()=>handleClick}  handleSortChange={()=>handleSortChange}/>
        <JobCardSkeleton />
        <JobCardSkeleton />
        <JobCardSkeleton />
        <JobCardSkeleton />
        
      </div>
    )
  }
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sorted = sortJobs(jobs.data, event.target.value);
    sortedJobs = [...sorted]
  };
  let sortedJobs = jobs.data
  console.log(jobs,"nsjkdnskadnkak")
  return (
    <div className="md:w-[60%] md:ml-[20%] md:text-2xl  text-black bg-white">
      

      {isLoading ? (
        <Loading />
      ) : !jobs ? (
        <h1>No jobs found or check if you are logedin </h1>
      ) : (
        <Provider>
          <StoreProvider >
            <Header handleClick={()=>handleClick}  handleSortChange={()=>handleSortChange}/>
          <div className=" ">
            <ul>
              {sortedJobs.map((job: jobtype) => (
                <JobCard key={job.id} job={job} />
              ))}
            </ul>
          </div>
          </StoreProvider>
        </Provider>
      )}
    </div>
  );
};

export default JobList;
