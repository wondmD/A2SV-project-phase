import React from 'react'
// import AboutSection from './components/about'
import AboutSection from '../components/about'
import MyComponent from '../components/body'
import { Jobs, jobtype } from '../data'



function page({params} : {
    params :{jobId : string}
}){


    return (
        <div className='px-40 font-sans text-2xl'>

            <div>
                <ul>
                    {
                    
                    Jobs.filter(job => job.id === params.jobId).map((jobx, index) => (
                        <li key={index}>
                            <div className='grid grid-cols-[3fr_1fr] max-w-[1300px] m-10 p-10'>
                                <div>
                                    <MyComponent
                                        description={jobx.description}
                                        location={jobx.when_where}
                                        traits={jobx.ideal_candidate.traits}
                                        age = {jobx.ideal_candidate.age}
                                        gender = {jobx.ideal_candidate.gender}
                                        responsiblity={jobx.responsibilities}

                                    />
                                </div>

                                <div className='m-10'>
                                    <AboutSection
                                        postedDate={jobx.about.posted_on}
                                        deadline={jobx.about.deadline}
                                        location={jobx.about.location}
                                        startDate={jobx.about.start_date}
                                        endDate={jobx.about.end_date}
                                        categories={jobx.about.categories}
                                        requiredSkills={jobx.about.required_skills}
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
