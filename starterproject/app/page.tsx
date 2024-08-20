/* eslint-disable react-hooks/rules-of-hooks */

'use client'
import React, { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
 
const page = () => {
  const {data: session}= useSession()
  console.log({session})


  // eslint-disable-next-line react-hooks/rules-of-hooks
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
    <div className='w-[60%] mx-[20%] mt-[10%]' >
      <h1 className='text-3xl block text-black'>Welcome to akill connect </h1>
        {session?.user?.data?.name ?
          <div>
            <p>Welcome, {session.user.data.name}!</p>
            <button className='btn btn-primary' onClick={()=>signOut()}>Sign Out</button>
          </div> 
          :
          <div>
            <p className='text-3xl m-3'>Please Login to see jobs</p>
            <button className='btn btn-primary m-10' onClick={()=>signIn()}>Sign In</button>
          </div> 
        }

       
       

        
     
    </div>
  )
}

export default page
