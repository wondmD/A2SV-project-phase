
'use client'
import React, { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
const page = () => {
  const {data: session}= useSession()
  console.log({session})


  const [jobs, setJobs] = useState()
  const book = async () => {
    try {
      const response = await fetch('https://akil-backend.onrender.com/bookmarks', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session?.user.data.accessToken}`,
          'Content-Type': 'application/json', 
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        
      }
      console.log(response)
  
      const data = await response.json();
      setJobs(data.data); 
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
    }
  };
  
 

  return (
    <div>
      <h1>this is the page
        {session?.user?.data?.name }

       
        {session?.user.data.accessToken}

        <button
        className='btn btn-primary'
        onClick={book}
        >
          {jobs && JSON.stringify(jobs)}
          Get user post
        </button>
      </h1>
    </div>
  )
}

export default page
