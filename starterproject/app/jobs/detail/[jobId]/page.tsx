"use client"
import React, { useEffect, useState } from 'react';
import AboutSection from '../components/about';
import MyComponent from '../components/body';
// import { jobtype } from '../dataInterface';
import Jobs from '../dataInterface';
import useFetchJobs from '../getdata';
import { useRouter } from 'next/router';
import jobtype from '../dataInterface';
import Loading from '@/app/components/Loading';

const JobDetailPage = ({ params }: { params: { jobId: string } }) => {
    // const [loadingv, setLoading] = useState(false)

    const { jobs, loading } = useFetchJobs();
   
    const [sortedJobs, setSortedJobs] = useState<jobtype[]>(jobs);
    useEffect(() => {
      setSortedJobs(jobs);
    }, [jobs]);

  const jobDetail = jobs.find((job) => job.id === params.jobId);

  // if (!jobDetail) {
  //   return <div>Job not found</div>;
  // }

  return (
    <html className='bg-white'>
        <body className=''>
        <div className='md:px-40 font-sans text-2xl'>
      <div>
        <div className='md:grid md:grid-cols-[3fr_1fr] m-5 p-5'>
          <div>
           {(loading || !jobDetail)? (<Loading />) :
           ( <MyComponent
            description={jobDetail.description}
            location={jobDetail.location.join(', ')}
            requirements={jobDetail.requirements}
            idealcand={jobDetail.idealCandidate}
            responsiblity={jobDetail.responsibilities}
            whenAndWhere={jobDetail.whenAndWhere}
          />)}
          </div>

          <div className='max-w-[300px]'>
          {(loading || !jobDetail)? (<p></p> ):
           ( 
           <AboutSection
            postedDate={jobDetail.datePosted}
            deadline={jobDetail.deadline}
            location={jobDetail.location.join(', ')}
            startDate={jobDetail.startDate}
            endDate={jobDetail.endDate}
            categories={jobDetail.categories}
            requiredSkills={jobDetail.requiredSkills}
          />)}
            
          </div>
        </div>
      </div>
    </div>
        </body>
    </html>
  );
};

export default JobDetailPage;
