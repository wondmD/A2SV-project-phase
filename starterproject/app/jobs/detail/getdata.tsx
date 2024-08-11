"use client"

import { useSession } from 'next-auth/react'

import jobtype from './data'

const fetchJobs = async (): Promise<jobtype[]> => {
    const session= useSession()
    try {
      const Data = await fetch('https://akil-backend.onrender.com/opportunities/search',{
        method: 'GET',
          headers: {
            'Authorization': `Bearer ${session?.user.data.accessToken}`,
            'Content-Type': 'application/json', 
          },
      }
      );
      const JsonJobs = await Data.json();
      const response = JsonJobs.data;
      return response;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      return [];
    }
  };
  
  
  const Jobs = fetchJobs();
  
  
  export default Jobs;
  