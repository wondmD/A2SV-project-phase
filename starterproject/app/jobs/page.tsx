/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import jobtype from "./detail/dataInterface";
import useFetchJobs from "./detail/getdata";
import Loading from "../auth/components/loading";
import JobCard from "./detail/components/jobcard";
import { useSession } from "next-auth/react";
import Provider from "../Provider";
import { useRouter } from "next/navigation";

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
  const { jobs, loading } = useFetchJobs();
  const router = useRouter();
  
  const [sortedJobs, setSortedJobs] = useState<jobtype[]>(jobs);
  useEffect(() => {
    setSortedJobs(jobs);
  }, [jobs]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sorted = sortJobs(jobs, event.target.value);
    setSortedJobs([...sorted]);
  };

  const handleClick = () => {
    router.push('/jobs/bookmarks')
  };
  console.log(jobs)
  return (
    <div className="md:w-[60%] md:ml-[20%] md:text-2xl  text-black bg-white">
      <div className="  ">
        <div className="">
          <div>
            <h1 className="ml-5 flex font-extrabold text-4xl mt-3 md:text-6xl">
              Opportunities
              <button
                onClick={handleClick}
                className="hidden md:flex md:mt-5 md:pt-1 relative pb-2 mx-10 mb-5 mt-0 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
              >
                My bookmarks
              </button>
            </h1>
          </div>
          <button
            onClick={handleClick}
            className="md:hidden  md:flex mt-5 md:pt-1 relative pb-2 mx-10 mt-0 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
          >
            My bookmark
          </button>
          <div className="flex justify-between items-center mt-3">
            <div className="text-left">
              <p className="text-[20px] ml-10 mt-2 font-light">
                showing 10 results
              </p>
            </div>

            <div className="flex text-right">
              <div className="bg-[#fff] ">
                <select className="text rounded bg-white border-0 border-r-4 h-10 w-[180px] mr-5"
                 onChange={handleSortChange}>
                  <option value="all">sort by</option>
                  <option value="date">Date</option>
                  <option value="alphabet">Alphabetically</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : !jobs ? (
        <h1>No jobs found or check if you are logedin </h1>
      ) : (
        <Provider>
          <div className=" ">
            <ul>
              {sortedJobs.map((job: jobtype) => (
                <JobCard key={job.id} job={job} />
              ))}
            </ul>
          </div>
        </Provider>
      )}
    </div>
  );
};

export default JobList;
