"use client";
import React, { useEffect, useState } from "react";
import AboutSection from "../components/about";
import Loading from "@/app/components/Loading";
import { useGetAllJobsQuery } from "@/lib/service/jobsService";
import { useSession } from "next-auth/react";
import MyComponent from "../components/body";
import jobtype from "../../components/dataInterface";

const JobDetailPage = ({ params }: { params: { jobId: string } }) => {
  const { data: session, status } = useSession();
  const token = session?.user.data.accessToken!;
  console.log(token);
  const { data: jobs, isLoading, isError } = useGetAllJobsQuery(token);

  const jobDetail = jobs.data.find((job: jobtype) => job.id === params.jobId);

  return (
    <html className="bg-white">
      <body className="">
        <div className="md:px-40 font-sans text-2xl">
          <div>
            <div className="md:grid md:grid-cols-[3fr_1fr] m-5 p-5">
              <div>
                {isLoading || !jobDetail ? (
                  <Loading />
                ) : (
                  <MyComponent
                    description={jobDetail.description}
                    location={jobDetail.location.join(", ")}
                    requirements={jobDetail.requirements}
                    idealcand={jobDetail.idealCandidate}
                    responsiblity={jobDetail.responsibilities}
                    whenAndWhere={jobDetail.whenAndWhere}
                  />
                )}
              </div>

              <div className="max-w-[300px]">
                {isLoading || !jobDetail ? (
                  <p></p>
                ) : (
                  <AboutSection
                    postedDate={jobDetail.datePosted}
                    deadline={jobDetail.deadline}
                    location={jobDetail.location.join(", ")}
                    startDate={jobDetail.startDate}
                    endDate={jobDetail.endDate}
                    categories={jobDetail.categories}
                    requiredSkills={jobDetail.requiredSkills}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default JobDetailPage;
