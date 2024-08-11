import React from 'react'
// import AboutSection from './components/about'
import AboutSection from '../components/about'
import MyComponent from '../components/body'
import { jobtype } from '../data'
import Jobs  from '../data'

//return on one job based on the url detail/id
// xport interface jobtype {
//     id: string;
//     title: string;
//     description: string;
//     responsibilities: string;
//     requirements: string;
//     idealCandidate: string;
//     categories: string[];
//     opType: string;
//     startDate: string;
//     endDate: string;
//     deadline: string;
//     location: string[];
//     requiredSkills: string[];
//     whenAndWhere: string;
//     orgID: string;
//     datePosted: string;
//     status: string;
//     applicantsCount: number;
//     viewsCount: number;
//     orgName: string;
//     logoUrl: string;
//     isBookmarked: boolean;
//     isRolling: boolean;
//     questions: string | null;
//     perksAndBenefits: string | null;
//     createdAt: string;
//     updatedAt: string;
//     orgPrimaryPhone: string;
//     orgEmail: string;
//     orgWebsite: string;
//     average_rating: number;
//     total_reviews: number;
//   }
  



async function page({params} : {
    params :{jobId : string}
}){


    return (
        <div className='px-40 font-sans text-2xl'>

            <div>
                <ul>
                    {
                    
                    (await Jobs).filter(job => job.id === params.jobId).map((jobx, index) => (
                        <li key={index}>
                            <div className='grid grid-cols-[3fr_1fr] max-w-[1300px] m-10 p-10'>
                                <div>
                                    <MyComponent
                                        description={jobx.description}
                                        location={jobx.location.join(' , ')}
                                        requirements={jobx.requirements}
                                      
                                        idealcand = {jobx.idealCandidate}
                                        
                                        responsiblity={jobx.responsibilities}
                                        whenAndWhere = {jobx.whenAndWhere}

                                    />
                                </div>

                                <div className='m-10'>
                                    <AboutSection
                                        postedDate={jobx.datePosted}
                                        deadline={jobx.deadline}
                                        location={jobx.location.join(' , ')}
                                        startDate={jobx.startDate}
                                        endDate={jobx.endDate}
                                        categories={jobx.categories}
                                        requiredSkills={jobx.requiredSkills}
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div >
    )
}

export default page
